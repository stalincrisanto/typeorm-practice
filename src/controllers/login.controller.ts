import { getRepository } from "typeorm";
import { User } from "../graphql/models/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const login = async (emailUser: string, passwordUser: string) => {
    const userData = await getRepository(User).findOne({ emailUser });

    const correctPassword =
        userData === null
            ? false
            : await bcrypt.compare(passwordUser, userData?.passwordUser);

    if (userData===null || correctPassword===false) {
        return {
            token: null,
            user: {
                idUser: null,
                nameUser: null,
                emailUser: null
            },
            errors: 'Usuario o contraseña incorrecta'
        }
    }

    const userForToken = {
        nameUser: userData?.nameUser
    }

    const token = jwt.sign(userForToken, 'stalin', {
        expiresIn: '2h'
    });

    return {
        token: token,
        user: {
            idUser: userData?.idUser,
            nameUser: userData?.nameUser,
            emailUser: userData?.emailUser
        },
        errors: ''
    }
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
