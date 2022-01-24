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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const Category_1 = require("../models/Category");
const category_input_1 = require("../resolvers/types/category.input");
let CategoryService = class CategoryService {
    async getAllCategories() {
        return await (0, typeorm_1.getRepository)(Category_1.Category).find();
    }
    async getOneCategory(idCategory) {
        const dataCategory = await (0, typeorm_1.getRepository)(Category_1.Category).findOne(idCategory);
        if (!dataCategory) {
            return {
                idCategory: null,
                nameCategory: null,
                errors: {
                    field: "idCategory",
                    message: "Id category doesn't exist"
                }
            };
        }
        return dataCategory;
    }
    async createCategory(dataCategory) {
        if (dataCategory.nameCategory !== "") {
            const newCategory = (0, typeorm_1.getRepository)(Category_1.Category).create(dataCategory);
            return await (0, typeorm_1.getRepository)(Category_1.Category).save(newCategory);
        }
        return {
            idCategory: null,
            nameCategory: null,
            errors: {
                field: "Nombre de la categoría",
                message: "Argument Validation Error"
            }
        };
    }
    async updateCategory(idCategory, dataCategory) {
        const results = await (0, typeorm_1.getRepository)(Category_1.Category).update(idCategory, dataCategory);
        if (results.affected === 0) {
            throw new Error(`Category not found`);
        }
        return await (0, typeorm_1.getRepository)(Category_1.Category).findOne(idCategory);
    }
    async deleteCategory(idCategory) {
        const result = await (0, typeorm_1.getRepository)(Category_1.Category).delete(idCategory);
        if (result.affected === 0) {
            throw new Error(`Category not found`);
        }
        return true;
    }
};
__decorate([
    (0, typedi_1.Service)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryService.prototype, "getAllCategories", null);
__decorate([
    (0, typedi_1.Service)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryService.prototype, "getOneCategory", null);
__decorate([
    (0, typedi_1.Service)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryService.prototype, "createCategory", null);
__decorate([
    (0, typedi_1.Service)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryService.prototype, "updateCategory", null);
__decorate([
    (0, typedi_1.Service)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryService.prototype, "deleteCategory", null);
CategoryService = __decorate([
    (0, typedi_1.Service)()
], CategoryService);
exports.CategoryService = CategoryService;
