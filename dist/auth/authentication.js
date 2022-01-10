"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const authentication = ({ context }, roles) => {
    //console.log(roles.length === 0)
    if (roles.length === 0) {
        return true;
    }
    else if (context.dataUser.rol === roles[0]) {
        return true;
    }
    else {
        return false;
    }
    // return true
    // console.log('Este es el rol para getAllUsers',roles)
    // //console.log(roles[0]===context.dataUser.rol)
    // return context.dataUser.rol===roles[0] ? true : false;
    //   //return true;
};
exports.authentication = authentication;
// import { NextFunction, Request, Response } from "express";
// import { AuthChecker } from 'type-graphql';
// const jwt = require('jsonwebtoken');
// export const authentication:AuthChecker = (tokenEntered:any) => {
//     let userLogged = true;
//     const authorization = tokenEntered;
//     let token = '';
//     if(authorization && authorization.toLowerCase().startsWith('bearer')){
//         token = authorization.substring(7);
//     }
//     try {
//         const decodedToken = jwt.verify(token, 'stalin');
//         const {nameUser} = decodedToken;
//         return userLogged;
//         //next();
//     } catch (error) {
//         return userLogged = false;
//     }
// }
