import { categoryType, recipeType, userType } from '../typesdef/types';
import { GraphQLString, GraphQLInt } from 'graphql';
import { getRepository } from 'typeorm';
import { Recipe } from '../../entity/Recipe';

export const createRecipe = {
    type: recipeType,
    args: {
        nameRecipe: { type: GraphQLString },
        descriptionRecipe: { type: GraphQLString },
        ingredientsRecipe: { type: GraphQLString },
        userId: { type: GraphQLInt },
        categoryId: { type: GraphQLInt },
    },
    resolve: async (source: any, args: any) => {
        const newRecipe = getRepository(Recipe).create(args);
        await getRepository(Recipe).save(newRecipe);
    }
}

export const updateRecipe = {
    type: recipeType,
    args: {
        idRecipe: { type: GraphQLInt },
        nameRecipe: { type: GraphQLString },
        descriptionRecipe: { type: GraphQLString },
        ingredientsRecipe: { type: GraphQLString },
        userId: { type: GraphQLInt },
        categoryId: { type: GraphQLInt },
    },
    resolve: async (source: any, args: any) => {
        const idRecipe = args.idRecipe;
        const recipeData = await getRepository(Recipe).findOne(idRecipe);
        if (recipeData != null) {
            getRepository(Recipe).merge(recipeData, args);
            const results = await getRepository(Recipe).save(recipeData);
            return results
        } else {
            return { msg: `La receta con id: ${idRecipe}, no existe` }
        }
    }
}

export const deleteRecipe = {
    type: recipeType,
    args: {
        idRecipe: { type: GraphQLInt }
    },
    resolve: async (source: any, args: any) => {
        const idRecipe = args.idRecipe;
        await getRepository(Recipe).delete(idRecipe);
    }
}