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
exports.Recipe = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const User_1 = require("./User");
const Category_1 = require("./Category");
let Recipe = class Recipe {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Recipe.prototype, "idRecipe", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "nameRecipe", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "descriptionRecipe", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Recipe.prototype, "ingredientsRecipe", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => User_1.User),
    (0, typeorm_1.ManyToOne)(type => User_1.User, user => user.recipes),
    __metadata("design:type", User_1.User)
], Recipe.prototype, "user", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => Category_1.Category),
    (0, typeorm_1.ManyToOne)(type => Category_1.Category, category => category.recipes),
    __metadata("design:type", Category_1.Category)
], Recipe.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Recipe.prototype, "userIdUser", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Recipe.prototype, "categoryIdCategory", void 0);
Recipe = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("recipes")
], Recipe);
exports.Recipe = Recipe;
// import { Category } from './Category';
// import { User } from './User';
// @Entity("recipes")
// export class Recipe {
//     @PrimaryGeneratedColumn()
//     idRecipe:number;
//     @Column()
//     nameRecipe:string;
//     @Column()
//     descriptionRecipe:string;
//     @Column()
//     ingredientsRecipe:string;
//     @ManyToOne(type => User, user => user.recipes)
//     user: User;
//     @ManyToOne(type => Category, category => category.recipes)
//     category: Category;
// }
