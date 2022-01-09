import { InputType, Field } from "type-graphql";
import { User } from "../../../entity/User";


@InputType()
export class LoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
