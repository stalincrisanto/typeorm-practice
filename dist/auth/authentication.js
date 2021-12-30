"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const jwt = require('jsonwebtoken');
const authentication = (tokenEntered) => {
    let userLogged = true;
    const authorization = tokenEntered;
    let token = '';
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    try {
        const decodedToken = jwt.verify(token, 'stalin');
        const { nameUser } = decodedToken;
        return userLogged;
        //next();
    }
    catch (error) {
        return userLogged = false;
    }
};
exports.authentication = authentication;
