"use client";

import { useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from '@/src/aws-exports';

Amplify.configure(awsExports);

export default function App() {
  // Ajustar el estado para aceptar tanto null como un objeto AuthUser
  const [user, setUser] = useState(null); // Permitir null o AuthUser

  // Renderizar el componente de autenticación
  return (
    <Authenticator
      formFields={{
        signUp: {
          address: {
            label: 'Address',
            placeholder: 'Enter your address',
            required: true,
          },
        },
      }}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Welcome, {user?.username}</h1>
          <p>Your address: {user?.attributes?.address}</p>
          <p>Your role: {user?.attributes?.["custom:type"]}</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
