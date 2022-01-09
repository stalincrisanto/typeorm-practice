"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextCreator = void 0;
const verify_token_1 = require("../verify-token");
const contextCreator = ({ req }) => {
    const context = {};
    if (req.headers.authorization) {
        const payloadUser = (0, verify_token_1.verifyToken)(req);
        context.dataUser = {
            ...payloadUser
        };
        return context;
    }
    return context;
    /**console.log('IMPRIMIENDO REQUEST',req.headers);
    console.log('Estoy en el context creator: ',context);
    return context**/
};
exports.contextCreator = contextCreator;
