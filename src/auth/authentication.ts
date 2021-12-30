import { NextFunction, Request, Response } from "express";

const jwt = require('jsonwebtoken');

export const authentication = (tokenEntered:string) => {
    let userLogged = true;
    const authorization = tokenEntered;
    let token = '';

    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token = authorization.substring(7);
    }

    try {
        const decodedToken = jwt.verify(token, 'stalin');
        const {nameUser} = decodedToken;
        return userLogged;
        //next();
    } catch (error) {
        return userLogged = false;
    }
}