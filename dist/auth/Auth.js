"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (request) => {
    const header = request.req.headers.authorization;
    // not found
    if (!header)
        return { isAuth: false };
    // token
    const token = header.split(" ");
    // token not found
    if (!token)
        return { isAuth: false };
    let decodeToken;
    try {
        decodeToken = jsonwebtoken_1.default.verify(token[1], 'stalin');
    }
    catch (err) {
        return { isAuth: false };
    }
    // in case any error found
    if (!!!decodeToken)
        return { isAuth: false };
    // token decoded successfully, and extracted data
    return { isAuth: true, idUser: decodeToken.idUser };
};
