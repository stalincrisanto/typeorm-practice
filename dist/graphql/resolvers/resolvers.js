"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../models/Recipe");
const User_1 = require("../models/User");
exports.resolvers = {
    Query: {
        getAllUsers(root, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const usersData = yield (0, typeorm_1.getRepository)(User_1.User).find();
                return usersData;
            });
        },
        getSingleUser(root, { idUser }) {
            return __awaiter(this, void 0, void 0, function* () {
                const singleUserData = yield (0, typeorm_1.getRepository)(User_1.User).findOne(idUser);
                return singleUserData;
            });
        },
        getAllRecipes(root, args) {
            return __awaiter(this, void 0, void 0, function* () {
                const recipesData = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).find({ relations: ["user", "category"] });
                return recipesData;
            });
        },
        getSingleRecipe(root, { idRecipe }) {
            return __awaiter(this, void 0, void 0, function* () {
                const recipeData = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe, { relations: ["user", "category"] });
                return recipeData;
            });
        }
    }
};
