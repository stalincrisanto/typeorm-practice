"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateNewToken = (req, res) => {
    const refreshToken = req.headers.refresh;
    let token = '';
    if (refreshToken && refreshToken.toLowerCase().startsWith('bearer')) {
        token = refreshToken.substring(7);
    }
    const decodedToken = jsonwebtoken_1.default.verify(token, 'crisanto');
    const userData = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    };
    const newToken = jsonwebtoken_1.default.sign(userData, 'stalin', {
        expiresIn: '10m'
    });
    const authToken = { newToken };
    return res.json({ newToken: authToken.newToken });
    //return authToken;
};
exports.generateNewToken = generateNewToken;
