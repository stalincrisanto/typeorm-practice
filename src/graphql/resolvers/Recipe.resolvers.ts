import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { Category } from "../models/Category";
import { Recipe } from '../models/Recipe'
import { User } from "../models/User";
import { CreateRecipeInput } from "./types/recipe.input";

@Resolver()
export class RecipeResolvers {
    @Authorized()
    @Query((returns) => [Recipe])
    async getAllRecipes(): Promise<Recipe[]> {
        return await getRepository(Recipe).find({ relations: ["user","category"] });
    }

    @Authorized()
    @Query((returns) => Recipe)
    async getOneRecipe(@Arg("idRecipe") idRecipe:number){
        return await getRepository(Recipe).findOne(idRecipe, { relations: ["user","category"] });
    }

    @Authorized()
    @Mutation((returns) => Recipe)
    async createRecipe(@Arg("recipeInput")recipeInput:CreateRecipeInput){
        const newRecipe = getRepository(Recipe).create(recipeInput);
        return await getRepository(Recipe).save(newRecipe);
    }

    @Authorized()
    @Mutation((returns) => Boolean)
    async deleteRecipe(@Arg("idRecipe") idRecipe:number){
        const result = await getRepository(Recipe).delete(idRecipe);
        if (result.affected === 0) {
        throw new Error(`Recipe not found probando la nueva rama`);
        }
        return true;
    }
}