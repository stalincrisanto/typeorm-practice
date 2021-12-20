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
exports.recipeType = exports.categoryType = exports.userType = void 0;
const graphql_1 = require("graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
;
const Category_1 = require("../../entity/Category");
const userType = new graphql_1.GraphQLObjectType({
    name: 'User',
    fields: {
        nameUser: {
            type: graphql_1.GraphQLString,
        },
        emailUser: {
            type: graphql_1.GraphQLString,
        },
        passwordUser: {
            type: graphql_1.GraphQLString,
        }
    }
});
exports.userType = userType;
const categoryType = new graphql_1.GraphQLObjectType({
    name: 'Category',
    fields: {
        nameCategory: {
            type: graphql_1.GraphQLString,
        }
    }
});
exports.categoryType = categoryType;
const recipeType = new graphql_1.GraphQLObjectType({
    name: 'Recipe',
    fields: {
        idRecipe: {
            type: graphql_1.GraphQLInt,
        },
        nameRecipe: {
            type: graphql_1.GraphQLString,
        },
        descriptionRecipe: {
            type: graphql_1.GraphQLString,
        },
        ingredientsRecipe: {
            type: graphql_1.GraphQLString,
        },
        user: {
            type: userType,
            resolve: (source, params) => __awaiter(void 0, void 0, void 0, function* () {
                const dataUsers = yield (0, typeorm_1.getRepository)(User_1.User).find();
                //console.log(dataUsers);
                return dataUsers;
            })
        },
        category: {
            type: categoryType,
            resolve: (source, params) => __awaiter(void 0, void 0, void 0, function* () {
                const dataCategories = yield (0, typeorm_1.getRepository)(Category_1.Category).find();
                //console.log(dataCategories);
                return dataCategories;
            })
        }
    }
});
exports.recipeType = recipeType;
