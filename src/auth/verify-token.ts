import jwt from "jsonwebtoken";
import { Request } from "express";
import internal from "stream";

interface IDataUser {
    idUser: number,
    nameUser: string,
    emailUser: string
}

export const verifyToken = ({ headers }: Request) => {
    const authorization = headers.authorization;
    let token = '';

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }

    const decodedToken: any = jwt.verify(token, 'stalin');
    const userData: IDataUser = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser
    }
    return userData;
}