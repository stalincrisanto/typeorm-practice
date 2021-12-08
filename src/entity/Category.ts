import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Recipe } from "./Recipe";

@Entity("categories")
export class Category {
    
    @PrimaryGeneratedColumn()
    idCategory:number;

    @Column({nullable: false})
    nameCategory:string;

    @OneToMany(type => Recipe, recipe => recipe.category)
    recipes: Recipe[];
}