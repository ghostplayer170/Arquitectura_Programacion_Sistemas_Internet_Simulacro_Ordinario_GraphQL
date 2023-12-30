// The GraphQL schema
export const typeDefs = `#graphql
  type Client { 
    id: ID!
  }

  type Query { # Endpoints
    #getClients: [Client!]!
    #getClient(id: ID!): Client!
  }

  type Mutation { # Endpoints
    #addClient(name: String!, email: String!): Client!
    #addCard(client: ID!, number: String!, cvv: Int!, expirity: String!, money: Float!): Client!
  }
`;
