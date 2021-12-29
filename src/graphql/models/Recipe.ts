import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Category } from './Category';
import { User } from './User';

@Entity("recipes")
export class Recipe {
    
    @PrimaryGeneratedColumn()
    idRecipe:number;

    @Column()
    nameRecipe:string;

    @Column()
    descriptionRecipe:string;

    @Column()
    ingredientsRecipe:string;

    @ManyToOne(type => User, user => user.recipes)
    user: User;
    
    @ManyToOne(type => Category, category => category.recipes)
    category: Category;
}