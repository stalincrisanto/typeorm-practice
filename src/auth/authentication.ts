import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export const authentication = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req.get('authorization');
    let token = '';

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }

    try {
        const decodedToken = jwt.verify(token, 'stalin');
        const {idUser} = decodedToken;
        req.body.idUser = idUser;
        next();
    } catch (error) {
        return res.status(401).json({errorMessage: 'Token inválido o sin token, error',nameError:error.name});
    }

    //console.log(decodedToken);


}