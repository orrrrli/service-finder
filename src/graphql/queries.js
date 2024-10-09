/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProveedor = /* GraphQL */ `
  query GetProveedor($id: ID!) {
    getProveedor(id: $id) {
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
export const listProveedors = /* GraphQL */ `
  query ListProveedors(
    $filter: ModelProveedorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProveedors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getServicio = /* GraphQL */ `
  query GetServicio($id: ID!) {
    getServicio(id: $id) {
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
export const listServicios = /* GraphQL */ `
  query ListServicios(
    $filter: ModelServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        descripcion
        createdAt
        updatedAt
        proveedorServiciosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
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
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        email
        createdAt
        updatedAt
        proveedorClientesId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClienteServicios = /* GraphQL */ `
  query GetClienteServicios($id: ID!) {
    getClienteServicios(id: $id) {
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
export const listClienteServicios = /* GraphQL */ `
  query ListClienteServicios(
    $filter: ModelClienteServiciosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClienteServicios(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        servicioClientesId
        clienteServiciosId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
