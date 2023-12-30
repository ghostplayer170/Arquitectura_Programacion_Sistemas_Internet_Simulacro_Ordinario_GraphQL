import Entity from "./entity/entityIndex.ts";
import { Query } from "./query/queryIndex.ts";
import { Mutation } from "./mutation/mutationIndex.ts";

// Group entities, queries and mutations in one object
export const resolvers = {
    ...Entity,
    ...Query,
    ...Mutation
};
