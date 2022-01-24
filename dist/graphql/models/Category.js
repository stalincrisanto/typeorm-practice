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
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("./Recipe");
const errors_type_1 = require("../resolvers/types/errors.type");
let Category = class Category {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID, { nullable: true }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "idCategory", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "nameCategory", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [Recipe_1.Recipe]),
    (0, typeorm_1.OneToMany)(type => Recipe_1.Recipe, recipe => recipe.category),
    __metadata("design:type", Array)
], Category.prototype, "recipes", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", errors_type_1.AppError)
], Category.prototype, "errors", void 0);
Category = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("categories")
], Category);
exports.Category = Category;
