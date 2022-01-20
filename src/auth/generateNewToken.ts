import { Request } from 'express';
import jwt from 'jsonwebtoken';

// interface IDataUser {
//     idUser: number,
//     nameUser: string,
//     emailUser: string,
//     rol: string
// }

export const generateNewToken = ( { headers }: Request ) => {
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
}