import { InputType, Field } from "type-graphql";
import { Category } from "../../models/Category";
import { Recipe } from "../../models/Recipe";
import { User } from "../../models/User";

@InputType()
export class CreateRecipeInput implements Partial<Recipe> {
  @Field()
  nameRecipe: string;

  @Field()
  descriptionRecipe: string;

  @Field()
  ingredientsRecipe: string;

  @Field()
  userIdUser: number;

  @Field()
  categoryIdCategory: number;
}
