import { Resolver, Mutation, Query, Authorized, Arg } from "type-graphql";
import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Category } from "../models/Category";
import { CategoryService } from "../services/Category.service";
import { CreateCategoryInput } from "./types/category.input";

@Service()
@Resolver()
export class CategoryResolver {

    constructor(private readonly categoryService: CategoryService){} 

    @Authorized("ADMIN")
    @Query((returns) => [Category])
    async getAllCategories(): Promise<Category[]> {
        return await this.categoryService.getAllCategories();
    }

    @Authorized()
    @Query((returns) => Category)
    async getOneCategory(@Arg("idCategory") idCategory:number){
        return await this.categoryService.getOneCategory(idCategory);
    }

    @Authorized("CUSTOMER")
    @Mutation((returns) => Category)
    async createCategory(@Arg("nameCategory") nameCategory:CreateCategoryInput){
        console.log(nameCategory);
        try {
            const newCategory = await this.categoryService.createCategory(nameCategory);
            return newCategory;
            
        } catch (error) {
            console.log(error);
        }
    }

    @Authorized()
    @Mutation((returns) => Category)
    async updateCategory(@Arg("idCategory") idCategory:number, @Arg("nameCategory") nameCategory:CreateCategoryInput){
        return await this.categoryService.updateCategory(idCategory,nameCategory);
    }

    @Authorized("ADMIN")
    @Mutation((returns) => Boolean)
    async deleteCategory(@Arg("idCategory") idCategory:number){
        return await this.categoryService.deleteCategory(idCategory);
    }
}