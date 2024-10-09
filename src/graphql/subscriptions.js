/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProveedor = /* GraphQL */ `
  subscription OnCreateProveedor(
    $filter: ModelSubscriptionProveedorFilterInput
  ) {
    onCreateProveedor(filter: $filter) {
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
export const onUpdateProveedor = /* GraphQL */ `
  subscription OnUpdateProveedor(
    $filter: ModelSubscriptionProveedorFilterInput
  ) {
    onUpdateProveedor(filter: $filter) {
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
export const onDeleteProveedor = /* GraphQL */ `
  subscription OnDeleteProveedor(
    $filter: ModelSubscriptionProveedorFilterInput
  ) {
    onDeleteProveedor(filter: $filter) {
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
export const onCreateServicio = /* GraphQL */ `
  subscription OnCreateServicio($filter: ModelSubscriptionServicioFilterInput) {
    onCreateServicio(filter: $filter) {
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
export const onUpdateServicio = /* GraphQL */ `
  subscription OnUpdateServicio($filter: ModelSubscriptionServicioFilterInput) {
    onUpdateServicio(filter: $filter) {
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
export const onDeleteServicio = /* GraphQL */ `
  subscription OnDeleteServicio($filter: ModelSubscriptionServicioFilterInput) {
    onDeleteServicio(filter: $filter) {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onCreateCliente(filter: $filter) {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onUpdateCliente(filter: $filter) {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente($filter: ModelSubscriptionClienteFilterInput) {
    onDeleteCliente(filter: $filter) {
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
export const onCreateClienteServicios = /* GraphQL */ `
  subscription OnCreateClienteServicios(
    $filter: ModelSubscriptionClienteServiciosFilterInput
  ) {
    onCreateClienteServicios(filter: $filter) {
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
export const onUpdateClienteServicios = /* GraphQL */ `
  subscription OnUpdateClienteServicios(
    $filter: ModelSubscriptionClienteServiciosFilterInput
  ) {
    onUpdateClienteServicios(filter: $filter) {
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
export const onDeleteClienteServicios = /* GraphQL */ `
  subscription OnDeleteClienteServicios(
    $filter: ModelSubscriptionClienteServiciosFilterInput
  ) {
    onDeleteClienteServicios(filter: $filter) {
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
