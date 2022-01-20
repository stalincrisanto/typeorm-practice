import { ObjectType, Field } from "type-graphql";
import { AppError } from "./errors.type";


@ObjectType()
export class AuthToken {
  @Field({nullable:true})
  token: string;

  @Field({nullable:true})
  refreshToken: string;

  @Field({nullable:true})
  errors: AppError;
}
