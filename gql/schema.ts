// The GraphQL schema
export const typeDefs = `#graphql
  type Contact { 
    id: ID!
    name: String!
    phone: String!
    country: String!
    localHour: String!
  }

  type Query { # Endpoints
    getContact(id: ID): Contact!
    getContacts: [Contact!]!
  }

  type Mutation { # Endpoints
    addContact(name: String!, phone: String!): Contact!
    deleteContact(id: ID!): Boolean!
    updateContact(id: ID!, name: String, phone:String): Contact!
  }
`;

/*
addContact, cuyos parámetros deben ser:
*Nombres y apellidos, tipo: “Alberto Romero Sanz”
Número de teléfono incluyendo prefijo nacional, tipo: “+34645543345”
getContact, cuyo parámetro debe ser el id generado por mongo y que devuelve:
Nombres y apellidos.
Número de teléfono
País de residencia
Hora actual de la capital del país de residencia.
getContacts, que devuelve todos los contactos, con los campos arriba mencionados.
deleteContact cuyo parámetro debe ser el id generado por mongo y que devuelve verdadero o false en función de si el contacto se ha borrado satisfactoriamente o no.
updateContact cuyo parámetro debe ser el id generado por mongo y los nuevos datos del contacto, se puede modificar tanto el nombre como el teléfono o ambos (pero no es obligatorio que sean ambos). Devuelve los datos del nuevo contacto.
*/

