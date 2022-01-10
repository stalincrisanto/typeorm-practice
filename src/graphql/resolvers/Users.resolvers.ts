import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { authentication } from "../../auth/authentication";
import { login } from "../../controllers/login.controller";
import { User } from '../models/User';
import { AuthToken } from './types/token.type';

@Resolver()
export class UserResolver {
    @Authorized()
    @Query((returns) => [User])
    async getAllUsers(): Promise<User[]> {
        return await getRepository(User).find();
    }

    @Authorized()
    @Query((returns) => User)
    async getSingleUser(@Arg("idUser")idUser:number) {
        return await getRepository(User).findOne(idUser);
    }

    @Mutation((returns) => AuthToken)
    generateToken(@Arg("emailUser")emailUser:string,@Arg("passwordUser")passwordUser:string) {
        return login(emailUser, passwordUser);
    }
}