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
const typeorm_1 = require("typeorm");
const login_controller_1 = require("../../controllers/login.controller");
const User_1 = require("../models/User");
const token_type_1 = require("./types/token.type");
let UserResolver = class UserResolver {
    // @Query((returns) => [User])
    // async getAllUsers(context: any): Promise<User[]> {
    //     if (!context.isAuth)
    //         return {
    //             error: true,
    //             message: "Token doesn't find!",
    //         };
    //     return await getRepository(User).find();
    // }
    async getSingleUser(idUser) {
        return await (0, typeorm_1.getRepository)(User_1.User).findOne(idUser);
    }
    generateToken(emailUser, passwordUser, context) {
        console.log(context.isAuth);
        if (!context.isAuth)
            return {
                error: true,
                message: "Token doesn't find!",
            };
        return (0, login_controller_1.login)(emailUser, passwordUser);
    }
};
__decorate([
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
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "generateToken", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
