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
exports.CategoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Category_1 = require("../models/Category");
const category_input_1 = require("./types/category.input");
let CategoryResolver = class CategoryResolver {
    async getAllCategories() {
        return await (0, typeorm_1.getRepository)(Category_1.Category).find();
    }
    async getOneCategory(idCategory) {
        return await (0, typeorm_1.getRepository)(Category_1.Category).findOne(idCategory);
    }
    async createCategory(nameCategory) {
        const newCategory = (0, typeorm_1.getRepository)(Category_1.Category).create(nameCategory);
        return await (0, typeorm_1.getRepository)(Category_1.Category).save(newCategory);
    }
    // @Authorized()
    // @Mutation((returns) => Category)
    // async updateCategory(@Arg("idCategory") idCategory:number, @Arg("nameCategory") nameCategory:CreateCategoryInput){
    //     const categoryData = await getRepository(Category).findOne(idCategory);
    //     const results = getRepository(Category).merge(categoryData,nameCategory);
    //     return await getRepository(Category).save(categoryData);
    // }
    async deleteCategory(idCategory) {
        const result = await (0, typeorm_1.getRepository)(Category_1.Category).delete(idCategory);
        if (result.affected === 0) {
            throw new Error(`Category not found`);
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => [Category_1.Category]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getAllCategories", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => Category_1.Category),
    __param(0, (0, type_graphql_1.Arg)("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getOneCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)((returns) => Category_1.Category),
    __param(0, (0, type_graphql_1.Arg)("nameCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.Arg)("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
CategoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
