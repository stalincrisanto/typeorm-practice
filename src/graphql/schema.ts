import { GraphQLSchema, GraphQLObjectType, GraphQLString,GraphQLList, GraphQLInt } from 'graphql';
import { getAllRecipes, getSingleRecipe } from './queries/Recipes';


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllRecipes: getAllRecipes,
        getSingleRecipe: getSingleRecipe
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
  })
