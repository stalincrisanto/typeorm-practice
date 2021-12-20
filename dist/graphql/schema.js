"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Recipes_1 = require("./queries/Recipes");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllRecipes: Recipes_1.getAllRecipes,
        getSingleRecipe: Recipes_1.getSingleRecipe
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
