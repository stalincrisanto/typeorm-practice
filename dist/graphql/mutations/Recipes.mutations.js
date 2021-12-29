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
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = void 0;
const types_1 = require("../typesdef/types");
const graphql_1 = require("graphql");
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../../entity/Recipe");
exports.createRecipe = {
    type: types_1.recipeType,
    args: {
        nameRecipe: { type: graphql_1.GraphQLString },
        descriptionRecipe: { type: graphql_1.GraphQLString },
        ingredientsRecipe: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLInt },
        categoryId: { type: graphql_1.GraphQLInt },
    },
    resolve: (source, args) => __awaiter(void 0, void 0, void 0, function* () {
        const newRecipe = (0, typeorm_1.getRepository)(Recipe_1.Recipe).create(args);
        yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).save(newRecipe);
    })
};
exports.updateRecipe = {
    type: types_1.recipeType,
    args: {
        idRecipe: { type: graphql_1.GraphQLInt },
        nameRecipe: { type: graphql_1.GraphQLString },
        descriptionRecipe: { type: graphql_1.GraphQLString },
        ingredientsRecipe: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLInt },
        categoryId: { type: graphql_1.GraphQLInt },
    },
    resolve: (source, args) => __awaiter(void 0, void 0, void 0, function* () {
        const idRecipe = args.idRecipe;
        const recipeData = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe);
        if (recipeData != null) {
            (0, typeorm_1.getRepository)(Recipe_1.Recipe).merge(recipeData, args);
            const results = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).save(recipeData);
            return results;
        }
        else {
            return { msg: `La receta con id: ${idRecipe}, no existe` };
        }
    })
};
exports.deleteRecipe = {
    type: types_1.recipeType,
    args: {
        idRecipe: { type: graphql_1.GraphQLInt }
    },
    resolve: (source, args) => __awaiter(void 0, void 0, void 0, function* () {
        const idRecipe = args.idRecipe;
        yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).delete(idRecipe);
    })
};
