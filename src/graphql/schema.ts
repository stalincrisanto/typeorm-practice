import { GraphQLSchema, GraphQLObjectType, GraphQLString,GraphQLList, GraphQLInt } from 'graphql';
import { getAllRecipes, getSingleRecipe } from './queries/Recipes';
import { createRecipe, deleteRecipe, updateRecipe } from './mutations/Recipes.mutations';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllRecipes: getAllRecipes,
        getSingleRecipe: getSingleRecipe
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createRecipe:createRecipe,
        updateRecipe: updateRecipe,
        deleteRecipe: deleteRecipe
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
  })
