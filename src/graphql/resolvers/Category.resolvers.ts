import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { getRepository } from "typeorm";
import { Category } from "../models/Category";
import { CreateCategoryInput } from "./types/category.input";

@Resolver()
export class CategoryResolver {
    @Authorized()
    @Query((returns) => [Category])
    async getAllCategories(): Promise<Category[]> {
        return await getRepository(Category).find();
    }

    @Authorized()
    @Query((returns) => Category)
    async getOneCategory(@Arg("idCategory") idCategory:number){
        return await getRepository(Category).findOne(idCategory);
    }

    @Authorized()
    @Mutation((returns) => Category)
    async createCategory(@Arg("nameCategory") nameCategory:CreateCategoryInput){
        const newCategory = getRepository(Category).create(nameCategory);
        return await getRepository(Category).save(newCategory);
    }

    // @Authorized()
    // @Mutation((returns) => Category)
    // async updateCategory(@Arg("idCategory") idCategory:number, @Arg("nameCategory") nameCategory:CreateCategoryInput){
    //     const categoryData = await getRepository(Category).findOne(idCategory);
    //     const results = getRepository(Category).merge(categoryData,nameCategory);
    //     return await getRepository(Category).save(categoryData);
    // }

    @Authorized()
    @Mutation((returns) => Boolean)
    async deleteCategory(@Arg("idCategory") idCategory:number){
        const result = await getRepository(Category).delete(idCategory);
        if (result.affected === 0) {
        throw new Error(`Category not found`);
        }
        return true;
    }
}