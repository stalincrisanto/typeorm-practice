"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = ({ headers }) => {
    const authorization = headers.authorization;
    let token = '';
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    const decodedToken = jsonwebtoken_1.default.verify(token, 'stalin');
    const userData = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    };
    return userData;
};
exports.verifyToken = verifyToken;
