import { GraphQLError } from "graphql";

export const Mutation = {
  Example: async (
    _: unknown,
    args: { },
  ): Promise<void> => {
    try {
      //code
    } catch (error) {
      throw new GraphQLError(`Error: ${error}`);
    }
  },
};
