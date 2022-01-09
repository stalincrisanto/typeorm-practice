import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AuthToken {
  @Field({nullable:true})
  token: string;
}
