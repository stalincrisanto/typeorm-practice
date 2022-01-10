import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import Auth from "../../auth/Auth";
import { authentication } from "../../auth/authentication";
import { login } from "../../controllers/login.controller";
import { User } from '../models/User';
import { AuthToken } from './types/token.type';

@Resolver()
export class UserResolver {

    // @Query((returns) => [User])
    // async getAllUsers(context: any): Promise<User[]> {
    //     if (!context.isAuth)
    //         return {
    //             error: true,
    //             message: "Token doesn't find!",
    //         };
    //     return await getRepository(User).find();
    // }

    @Query((returns) => User)
    async getSingleUser(@Arg("idUser") idUser: number) {
        return await getRepository(User).findOne(idUser);
    }

    @Mutation((returns) => AuthToken)
    generateToken(@Arg("emailUser") emailUser: string, @Arg("passwordUser") passwordUser: string, context: any) {
        console.log(context.isAuth);
        if (!context.isAuth)
            return {
                error: true,
                message: "Token doesn't find!",
            };
        return login(emailUser, passwordUser);
    }
}