import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Recipe } from './Recipe';
import { AppError } from "../resolvers/types/errors.type";
@ObjectType()
@Entity("categories")
export class Category {
    
    @Field((type) => ID,{nullable: true})
    @PrimaryGeneratedColumn()
    idCategory:number;

    @Field({nullable: true})
    @Column({nullable: true})
    nameCategory:string;

    @Field(type => [Recipe])
    @OneToMany(type => Recipe, recipe => recipe.category)
    recipes: Recipe[];

    @Field({nullable:true})
    errors:AppError;
}