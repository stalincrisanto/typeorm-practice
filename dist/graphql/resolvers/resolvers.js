"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const typeorm_1 = require("typeorm");
const login_controller_1 = require("../../controllers/login.controller");
const Recipe_1 = require("../models/Recipe");
const User_1 = require("../models/User");
exports.resolvers = {
    Query: {
        async getAllUsers(root, args, context) {
            if (!context.isAuth)
                return {
                    error: true,
                    message: "Token doesn't find!",
                };
            const usersData = await (0, typeorm_1.getRepository)(User_1.User).find();
            return usersData;
        },
        async getSingleUser(root, { idUser }) {
            const singleUserData = await (0, typeorm_1.getRepository)(User_1.User).findOne(idUser);
            if (singleUserData !== null) {
                return singleUserData;
            }
            return {
                idUser: null,
                nameUser: null,
                emailUser: null,
                passwordUser: null,
                errorsUser: `No se encontró el usuario con id ${idUser}`
            };
        },
        async getAllRecipes(root, args) {
            const recipesData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).find({ relations: ["user", "category"] });
            return recipesData;
        },
        async getSingleRecipe(root, { idRecipe }) {
            const recipeData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe, { relations: ["user", "category"] });
            return recipeData;
        }
    },
    Mutation: {
        //parent: any, args: any, context: any, info: any
        generateToken(root, { emailUser, passwordUser }, context) {
            const token = (0, login_controller_1.login)(emailUser, passwordUser);
            return token;
        }
    }
};
