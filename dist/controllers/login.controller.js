"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { emailUser, passwordUser } = req.body;
    const userData = yield (0, typeorm_1.getRepository)(User_1.User).findOne({ emailUser });
    const correctPassword = userData === null
        ? false
        : yield bcrypt.compare(passwordUser, userData === null || userData === void 0 ? void 0 : userData.passwordUser);
    if (!(userData && correctPassword)) {
        return res.status(401).json({
            error: 'Usuario o contraseña incorrecta'
        });
    }
    const userForToken = {
        idUser: userData === null || userData === void 0 ? void 0 : userData.idUser,
        nameUser: userData === null || userData === void 0 ? void 0 : userData.nameUser
    };
    const token = jwt.sign(userForToken, 'stalin', {
        expiresIn: '2h'
    });
    res.send({
        nameUser: userData === null || userData === void 0 ? void 0 : userData.nameUser,
        emailUser: userData === null || userData === void 0 ? void 0 : userData.emailUser,
        token
    });
});
exports.login = login;
