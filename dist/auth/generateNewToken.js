"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateNewToken = void 0;
// interface IDataUser {
//     idUser: number,
//     nameUser: string,
//     emailUser: string,
//     rol: string
// }
const generateNewToken = ({ headers }) => {
    const authorization = headers.authorization;
    let token = '';
    /**if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }

    const decodedToken: any = jwt.verify(token, 'stalin');
    const userData: IDataUser = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    }**/
    return "userData";
};
exports.generateNewToken = generateNewToken;
