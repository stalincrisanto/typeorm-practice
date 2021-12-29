import { getRepository } from "typeorm";
import { login } from "../../controllers/login.controller";
import { Recipe } from "../models/Recipe";
import { User } from '../models/User';

export const resolvers = {
    Query: {
        async getAllUsers(root: any, args: any){
            const usersData = await getRepository(User).find();
            return usersData;
        },
        async getSingleUser(root: any, { idUser }:{ idUser:any }){
            const singleUserData = await getRepository(User).findOne(idUser);
            return singleUserData;
        },
        async getAllRecipes(root: any, args: any){
            const recipesData = await getRepository(Recipe).find({ relations: ["user", "category"] });
            return recipesData;
        },
        async getSingleRecipe(root: any, { idRecipe }:{ idRecipe:any }){
            const recipeData = await getRepository(Recipe).findOne(idRecipe,{ relations: ["user","category"] });
            return recipeData;
        }
    },
    Mutation: {
        generateToken(root:any, {emailUser, passwordUser}:{emailUser:string, passwordUser:string}){
            const token = login(emailUser, passwordUser);
            return token
        }
    }
}