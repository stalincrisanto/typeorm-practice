"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// interface IDataUser {
//     idUser: number,
//     nameUser: string,
//     emailUser: string,
//     rol: string
// }
const generateNewToken = (headers) => {
    console.log('Estoy ingresando', headers);
    //const authorization = headers.authorization;
    let token = '';
    if (headers && headers.toLowerCase().startsWith('bearer')) {
        token = headers.substring(7);
    }
    const decodedToken = jsonwebtoken_1.default.verify(token, 'crisanto');
    /**const userData: IDataUser = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    }**/
    return "userData";
};
exports.generateNewToken = generateNewToken;
