import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

interface IDataUser {
    idUser: number,
    nameUser: string,
    emailUser: string,
    rol: string
}

export const generateNewToken = ( req:Request, res:Response) => {
    const refreshToken = req.headers.refresh as string;

    let token = '';

    if(refreshToken && refreshToken.toLowerCase().startsWith('bearer')){
        token = refreshToken.substring(7);
    }

    const decodedToken: any = jwt.verify(token, 'crisanto');
    const userData: IDataUser = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    }

    const newToken = jwt.sign(userData, 'stalin', {
        expiresIn: '10m'
    });
    
    const authToken = { newToken };

    return res.json({newToken:authToken.newToken});
    //return authToken;
}