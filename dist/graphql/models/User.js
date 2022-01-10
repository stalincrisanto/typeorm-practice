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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Recipe_1 = require("./Recipe");
let User = class User {
};
__decorate([
    (0, type_graphql_1.Field)((type) => type_graphql_1.ID),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "idUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "nameUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        length: 200,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "emailUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        length: 100,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "passwordUser", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({
        length: 200,
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "rol", void 0);
__decorate([
    (0, type_graphql_1.Field)((type) => [Recipe_1.Recipe]),
    (0, typeorm_1.OneToMany)(type => Recipe_1.Recipe, recipe => recipe.user),
    __metadata("design:type", Array)
], User.prototype, "recipes", void 0);
User = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)("users")
], User);
exports.User = User;
