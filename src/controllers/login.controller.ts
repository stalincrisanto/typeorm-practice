import { getRepository } from "typeorm";
import { User } from "../graphql/models/User";
import { AuthToken } from "../graphql/resolvers/types/token.type";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const login = async (emailUser: string, passwordUser: string) => {
    const userData = await getRepository(User).findOne({ emailUser });

    const correctPassword =
        userData === null
            ? false
            : await bcrypt.compare(passwordUser, userData?.passwordUser);

    if (userData === null || correctPassword === false) {
        //throw new Error("Credenciales inválidas")
        return {
            token:null,
            refreshToken: null,
            errors:{
                field:"Email or password",
                message: "Invalid credentials"
            }
        }
    }

    const userForToken = {
        idUser: userData?.idUser,
        nameUser: userData?.nameUser,
        emailUser: userData?.emailUser,
        rol: userData?.rol
    }

    const userForRefreshToken = {
        idUser: userData?.idUser,
        nameUser: userData?.nameUser,
        emailUser: userData?.emailUser,
        rol: userData?.rol
    }

    const token = jwt.sign(userForToken, 'stalin', {
        expiresIn: '5m'
    });

    const refreshToken = jwt.sign(userForRefreshToken, 'crisanto', {
        expiresIn: '10m'
    });

    const authToken = { token, refreshToken };

    return authToken;
}

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
