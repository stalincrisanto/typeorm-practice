"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeResolvers = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../models/Recipe");
const recipe_input_1 = require("./types/recipe.input");
let RecipeResolvers = class RecipeResolvers {
    async getAllRecipes() {
        return await (0, typeorm_1.getRepository)(Recipe_1.Recipe).find({ relations: ["user", "category"] });
    }
    async getOneRecipe(idRecipe) {
        return await (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(idRecipe, { relations: ["user", "category"] });
    }
    async createRecipe(recipeInput) {
        const newRecipe = (0, typeorm_1.getRepository)(Recipe_1.Recipe).create(recipeInput);
        return await (0, typeorm_1.getRepository)(Recipe_1.Recipe).save(newRecipe);
    }
    async deleteRecipe(idRecipe) {
        const result = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).delete(idRecipe);
        if (result.affected === 0) {
            throw new Error(`Recipe not found`);
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => [Recipe_1.Recipe]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolvers.prototype, "getAllRecipes", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => Recipe_1.Recipe),
    __param(0, (0, type_graphql_1.Arg)("idRecipe")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecipeResolvers.prototype, "getOneRecipe", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)((returns) => Recipe_1.Recipe),
    __param(0, (0, type_graphql_1.Arg)("recipeInput")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [recipe_input_1.CreateRecipeInput]),
    __metadata("design:returntype", Promise)
], RecipeResolvers.prototype, "createRecipe", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.Arg)("idRecipe")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RecipeResolvers.prototype, "deleteRecipe", null);
RecipeResolvers = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipeResolvers);
exports.RecipeResolvers = RecipeResolvers;
