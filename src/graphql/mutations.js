/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProveedor = /* GraphQL */ `
  mutation CreateProveedor(
    $input: CreateProveedorInput!
    $condition: ModelProveedorConditionInput
  ) {
    createProveedor(input: $input, condition: $condition) {
      id
      nombre
      servicios {
        nextToken
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProveedor = /* GraphQL */ `
  mutation UpdateProveedor(
    $input: UpdateProveedorInput!
    $condition: ModelProveedorConditionInput
  ) {
    updateProveedor(input: $input, condition: $condition) {
      id
      nombre
      servicios {
        nextToken
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProveedor = /* GraphQL */ `
  mutation DeleteProveedor(
    $input: DeleteProveedorInput!
    $condition: ModelProveedorConditionInput
  ) {
    deleteProveedor(input: $input, condition: $condition) {
      id
      nombre
      servicios {
        nextToken
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createServicio = /* GraphQL */ `
  mutation CreateServicio(
    $input: CreateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    createServicio(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorServiciosId
      __typename
    }
  }
`;
export const updateServicio = /* GraphQL */ `
  mutation UpdateServicio(
    $input: UpdateServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    updateServicio(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorServiciosId
      __typename
    }
  }
`;
export const deleteServicio = /* GraphQL */ `
  mutation DeleteServicio(
    $input: DeleteServicioInput!
    $condition: ModelServicioConditionInput
  ) {
    deleteServicio(input: $input, condition: $condition) {
      id
      nombre
      descripcion
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      clientes {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorServiciosId
      __typename
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
      id
      nombre
      email
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      servicios {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorClientesId
      __typename
    }
  }
`;
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
      id
      nombre
      email
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      servicios {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorClientesId
      __typename
    }
  }
`;
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
      id
      nombre
      email
      proveedor {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      servicios {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      proveedorClientesId
      __typename
    }
  }
`;
export const createClienteServicios = /* GraphQL */ `
  mutation CreateClienteServicios(
    $input: CreateClienteServiciosInput!
    $condition: ModelClienteServiciosConditionInput
  ) {
    createClienteServicios(input: $input, condition: $condition) {
      id
      cliente {
        id
        nombre
        email
        createdAt
        updatedAt
        proveedorClientesId
        __typename
      }
      servicio {
        id
        nombre
        descripcion
        createdAt
        updatedAt
        proveedorServiciosId
        __typename
      }
      createdAt
      updatedAt
      servicioClientesId
      clienteServiciosId
      __typename
    }
  }
`;
export const updateClienteServicios = /* GraphQL */ `
  mutation UpdateClienteServicios(
    $input: UpdateClienteServiciosInput!
    $condition: ModelClienteServiciosConditionInput
  ) {
    updateClienteServicios(input: $input, condition: $condition) {
      id
      cliente {
        id
        nombre
        email
        createdAt
        updatedAt
        proveedorClientesId
        __typename
      }
      servicio {
        id
        nombre
        descripcion
        createdAt
        updatedAt
        proveedorServiciosId
        __typename
      }
      createdAt
      updatedAt
      servicioClientesId
      clienteServiciosId
      __typename
    }
  }
`;
export const deleteClienteServicios = /* GraphQL */ `
  mutation DeleteClienteServicios(
    $input: DeleteClienteServiciosInput!
    $condition: ModelClienteServiciosConditionInput
  ) {
    deleteClienteServicios(input: $input, condition: $condition) {
      id
      cliente {
        id
        nombre
        email
        createdAt
        updatedAt
        proveedorClientesId
        __typename
      }
      servicio {
        id
        nombre
        descripcion
        createdAt
        updatedAt
        proveedorServiciosId
        __typename
      }
      createdAt
      updatedAt
      servicioClientesId
      clienteServiciosId
      __typename
    }
  }
`;
