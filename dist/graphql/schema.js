"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Recipes_1 = require("./queries/Recipes");
const Recipes_mutations_1 = require("./mutations/Recipes.mutations");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllRecipes: Recipes_1.getAllRecipes,
        getSingleRecipe: Recipes_1.getSingleRecipe
    }
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createRecipe: Recipes_mutations_1.createRecipe,
        updateRecipe: Recipes_mutations_1.updateRecipe,
        deleteRecipe: Recipes_mutations_1.deleteRecipe
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
