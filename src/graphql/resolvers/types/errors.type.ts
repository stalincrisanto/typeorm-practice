import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class AppError {
  @Field({nullable:true})
  field: string;

  @Field({nullable:true})
  message: string;
}
