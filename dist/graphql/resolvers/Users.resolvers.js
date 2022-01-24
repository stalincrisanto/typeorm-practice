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
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typedi_1 = require("typedi");
const typeorm_1 = require("typeorm");
const login_controller_1 = require("../../controllers/login.controller");
const User_1 = require("../models/User");
const token_type_1 = require("./types/token.type");
let UserResolver = class UserResolver {
    async getAllUsers() {
        return await (0, typeorm_1.getRepository)(User_1.User).find();
    }
    async getSingleUser(idUser) {
        return await (0, typeorm_1.getRepository)(User_1.User).findOne(idUser);
    }
    generateToken(emailUser, passwordUser) {
        return (0, login_controller_1.login)(emailUser, passwordUser);
    }
    generateTokenFromRefreshToken(req) {
        console.log(req);
        //const refreshToken = headers.authorization;
        //return generateNewToken(refreshToken!);
    }
};
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, type_graphql_1.Authorized)(),
    (0, type_graphql_1.Query)((returns) => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("idUser")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getSingleUser", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => token_type_1.AuthToken),
    __param(0, (0, type_graphql_1.Arg)("emailUser")),
    __param(1, (0, type_graphql_1.Arg)("passwordUser")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "generateToken", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "generateTokenFromRefreshToken", null);
UserResolver = __decorate([
    (0, typedi_1.Service)(),
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
