// The GraphQL schema
export const typeDefs = `#graphql
  type Example { 
    id: ID!
  }

  type Query { # Endpoints
    #getExamples: [Example!]!
  }

  type Mutation { # Endpoints
    #addExample(name: String!): Example!
  }
`;
