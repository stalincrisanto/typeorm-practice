import { GraphQLList, GraphQLInt } from 'graphql';
import { getRepository } from "typeorm";
import { Recipe } from '../../entity/Recipe';
import { recipeType } from '../typesdef/types';

export const getAllRecipes = {
    type: new GraphQLList(recipeType),
    resolve: async () => {
        const dataRecipes = await getRepository(Recipe).find({ relations: ["user", "category"] });
        console.log(dataRecipes);
        return dataRecipes;
    }
}

export const getSingleRecipe = {
    type: recipeType,
    args: {
        idRecipe: { type: GraphQLInt }
    },
    resolve: async (source: any, { idRecipe }: { idRecipe: any }) => {
        const recipeData = await getRepository(Recipe).findOne(idRecipe, { relations: ["user", "category"] });
        return recipeData;
    }
}