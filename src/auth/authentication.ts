import { AuthChecker } from "type-graphql";
export const authentication: AuthChecker<any> = ({ context }) => {
  return context.dataUser ? true : false;
    
    //return true;
  };
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