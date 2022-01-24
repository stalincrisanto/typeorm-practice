import { Request } from 'express';
import jwt from 'jsonwebtoken';

// interface IDataUser {
//     idUser: number,
//     nameUser: string,
//     emailUser: string,
//     rol: string
// }

export const generateNewToken = ( headers:String ) => {
    console.log('Estoy ingresando',headers);
    //const authorization = headers.authorization;
    let token = '';

    if(headers && headers.toLowerCase().startsWith('bearer')){
        token = headers.substring(7);
    }

    const decodedToken: any = jwt.verify(token, 'crisanto');
    /**const userData: IDataUser = {
        idUser: decodedToken.idUser,
        nameUser: decodedToken.nameUser,
        emailUser: decodedToken.emailUser,
        rol: decodedToken.rol
    }**/
    
    return "userData";
}