import { InputType, Field } from "type-graphql";
import { Length } from "class-validator";
import { Category } from '../../models/Category';

@InputType({
  description: "Type for defining and validating Category creation input data",
})
export class CreateCategoryInput implements Partial<Category> {
  @Field()
  @Length(2, 255)
  nameCategory: string;
}
