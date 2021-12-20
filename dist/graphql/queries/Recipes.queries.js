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
exports.getSingleRecipe = exports.getAllRecipes = void 0;
const graphql_1 = require("graphql");
const typeorm_1 = require("typeorm");
;
const Recipe_1 = require("../entity/Recipe");
exports.getAllRecipes = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        recipes: {
            type: new graphql_1.GraphQLList(recipeType),
            resolve: () => __awaiter(void 0, void 0, void 0, function* () {
                const dataRecipes = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).find({ relations: ["user", "category"] });
                console.log(dataRecipes);
                return dataRecipes;
            })
        },
        recipe: {
            type: recipeType,
            args: {
                idRecipe: { type: graphql_1.GraphQLInt }
            },
            resolve: (source, { idRecipe }) => __awaiter(void 0, void 0, void 0, function* () {
                const recipeData = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe, { relations: ["user", "category"] });
                return recipeData;
            })
        }
    }
});
exports.getSingleRecipe = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        recipe: {
            type: recipeType,
            args: {
                idRecipe: { type: graphql_1.GraphQLInt }
            },
            resolve: (source, { idRecipe }) => __awaiter(void 0, void 0, void 0, function* () {
                const recipeData = yield (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe, { relations: ["user", "category"] });
                return recipeData;
            })
        }
    }
});