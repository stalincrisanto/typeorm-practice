import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { authentication } from "../../auth/authentication";
import { login } from "../../controllers/login.controller";
import { User } from '../models/User';
import { LoginInput } from "./types/login-input.type";
import { AuthToken } from './types/token.type';

@Resolver()
export class UserResolver {
    @Authorized()
    @Query((returns) => [User], {
        description: "Returns an array of all existing userss",
    })
    async getAllUsers(): Promise<User[]> {
        return await getRepository(User).find();
    }

    @Mutation((returns) => AuthToken)
    generateToken(@Arg("emailUser")emailUser:string,@Arg("passwordUser")passwordUser:string) {
        return login(emailUser, passwordUser);
        //return await login(emailUser, passwordUser);
    }
}