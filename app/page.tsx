"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth/cognito";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  // Ajustar el estado para aceptar tanto `null` como un objeto `AuthUser`
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | AuthUser>(null); // Permitir null o AuthUser

  // Función para listar tareas
  const listTodos = () => {
    setLoading(true);
    client.models.Todo.observeQuery().subscribe({
      next: (data) => {
        setTodos([...data.items]);
        setLoading(false);
      },
      error: (err) => {
        console.log("Error al listar tareas:", err);
        setLoading(false);
      },
    });
  };

  // Ejecutar consulta cuando el usuario cambia
  useEffect(() => {
    if (user) {
      listTodos(); // Volver a listar tareas cuando el usuario esté autenticado
    } else {
      setTodos([]); // Limpiar tareas si el usuario ha cerrado sesión
    }
  }, [user]); // Dependencia del estado de usuario

  // Renderizar el componente de autenticación
  return (
    <Authenticator>
      {({ signOut, user: authenticatedUser }) => {
        // Actualizar el estado del usuario autenticado
        if (authenticatedUser && authenticatedUser !== user) {
          setUser(authenticatedUser); // Actualizar el estado del usuario
        }

        // Función para crear una nueva tarea
        const createTodo = () => {
          const content = window.prompt("Todo content");
          if (content) {
            client.models.Todo.create({
              content,
            }).then(() => listTodos()); // Volver a listar después de crear una tarea
          }
        };

        // Función para eliminar una tarea
        const deleteTodo = (id: string) => {
          client.models.Todo.delete({ id }).then(() => listTodos()); // Volver a listar después de eliminar una tarea
        };

        return (
          <main>
            <h1>My todo {authenticatedUser?.signInDetails?.loginId}</h1>
            <button onClick={createTodo}>+ new</button>

            {loading ? (
              <p>Cargando tareas...</p>
            ) : (
              <ul>
                {todos.map((todo) => (
                  <li onClick={() => deleteTodo(todo.id)} key={todo.id}>
                    {todo.content}
                  </li>
                ))}
              </ul>
            )}

            <button onClick={signOut}>Sign out</button>

            <div>
              🥳 App successfully hosted. Try creating a new todo.
              <br />
              <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
                Review next steps of this tutorial.
              </a>
            </div>
          </main>
        );
      }}
    </Authenticator>
  );
}
