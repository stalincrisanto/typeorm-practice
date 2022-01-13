import { Service, Inject } from "typedi";
import { getRepository } from "typeorm";
import { Category } from "../models/Category";
import { CreateCategoryInput } from "../resolvers/types/category.input";

@Service()
export class CategoryService {
    
    @Service()
    async getAllCategories(): Promise<Category[]> {
        return await getRepository(Category).find();
    }

    @Service()
    async getOneCategory(idCategory:number){
        return await getRepository(Category).findOne(idCategory);
    }

    @Service()
    async createCategory(dataCategory: CreateCategoryInput){
        const newCategory = getRepository(Category).create(dataCategory);
        return await getRepository(Category).save(newCategory);
    }

    @Service()
    async updateCategory(idCategory:number, dataCategory:CreateCategoryInput){
        const results = await getRepository(Category).update(idCategory, dataCategory);
        if (results.affected === 0) {
            throw new Error(`Category not found`);
        }
        return await getRepository(Category).findOne(idCategory)
    }

    @Service()
    async deleteCategory(idCategory:number){
        const result = await getRepository(Category).delete(idCategory);
        if (result.affected === 0) {
            throw new Error(`Category not found`);
        }
        return true;
    }
}