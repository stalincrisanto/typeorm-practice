"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authentication = void 0;
const jwt = require('jsonwebtoken');
const authentication = (req, res, next) => {
    const authorization = req.get('authorization');
    let token = '';
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7);
    }
    try {
        const decodedToken = jwt.verify(token, 'stalin');
        const { idUser } = decodedToken;
        req.body.idUser = idUser;
        next();
    }
    catch (error) {
        return res.status(401).json({ errorMessage: 'Token inválido o sin token', nameError: error.name });
    }
    //console.log(decodedToken);
};
exports.authentication = authentication;
