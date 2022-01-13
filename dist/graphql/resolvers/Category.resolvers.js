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
const typedi_1 = require("typedi");
const Category_1 = require("../models/Category");
const Category_service_1 = require("../services/Category.service");
const category_input_1 = require("./types/category.input");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getAllCategories() {
        return await this.categoryService.getAllCategories();
    }
    async getOneCategory(idCategory) {
        return await this.categoryService.getOneCategory(idCategory);
    }
    async createCategory(nameCategory) {
        return await this.categoryService.createCategory(nameCategory);
    }
    async updateCategory(idCategory, nameCategory) {
        return await this.categoryService.updateCategory(idCategory, nameCategory);
    }
    async deleteCategory(idCategory) {
        return await this.categoryService.deleteCategory(idCategory);
    }
};
__decorate([
    (0, type_graphql_1.Authorized)("ADMIN"),
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
    (0, type_graphql_1.Authorized)("CUSTOMER"),
    (0, type_graphql_1.Mutation)((returns) => Category_1.Category),
    __param(0, (0, type_graphql_1.Arg)("nameCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Mutation)((returns) => Category_1.Category),
    __param(0, (0, type_graphql_1.Arg)("idCategory")),
    __param(1, (0, type_graphql_1.Arg)("nameCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, type_graphql_1.Authorized)("ADMIN"),
    (0, type_graphql_1.Mutation)((returns) => Boolean),
    __param(0, (0, type_graphql_1.Arg)("idCategory")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "deleteCategory", null);
CategoryResolver = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [Category_service_1.CategoryService])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
