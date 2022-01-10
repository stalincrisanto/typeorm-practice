"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../graphql/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const login = async (emailUser, passwordUser) => {
    const userData = await (0, typeorm_1.getRepository)(User_1.User).findOne({ emailUser });
    const correctPassword = userData === null
        ? false
        : await bcrypt.compare(passwordUser, userData === null || userData === void 0 ? void 0 : userData.passwordUser);
    if (userData === null || correctPassword === false) {
        /**return {
            token: null,
            user: {
                idUser: null,
                nameUser: null,
                emailUser: null
            },
            errors: 'Usuario o contraseña incorrecta'
        }**/
        throw new Error("Usuario o contraseña incorrecta");
    }
    const userForToken = {
        idUser: userData === null || userData === void 0 ? void 0 : userData.idUser,
        nameUser: userData === null || userData === void 0 ? void 0 : userData.nameUser,
        emailUser: userData === null || userData === void 0 ? void 0 : userData.emailUser,
        rol: userData === null || userData === void 0 ? void 0 : userData.rol
    };
    const token = jwt.sign(userForToken, 'stalin', {
        expiresIn: '2h'
    });
    /**return {
        token: token,
        user: {
            idUser: userData?.idUser,
            nameUser: userData?.nameUser,
            emailUser: userData?.emailUser
        },
        errors: ''
    }**/
    const authToken = { token };
    return authToken;
};
exports.login = login;
// export const login = async (req: Request, res: Response) => {
//   const { emailUser, passwordUser } = req.body;
//   const userData = await getRepository(User).findOne({ emailUser });
//   const correctPassword =
//     userData === null
//       ? false
//       : await bcrypt.compare(passwordUser, userData?.passwordUser);
//   if(!(userData && correctPassword)){
//         return res.status(401).json({
//             error:'Usuario o contraseña incorrecta'
//         })
//     }
//     const userForToken = {
//         idUser : userData?.idUser,
//         nameUser: userData?.nameUser
//     }
//     const token = jwt.sign(userForToken, 'stalin',{
//         expiresIn: '2h'
//     });
//     res.send({
//        nameUser: userData?.nameUser,
//        emailUser: userData?.emailUser,
//        token
//     })
// };
