import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import { Recipe } from './Recipe';
@ObjectType()
@Entity("categories")
export class Category {
    
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    idCategory:number;

    @Field()
    @Column({nullable: false})
    nameCategory:string;

    @Field(type => [Recipe])
    @OneToMany(type => Recipe, recipe => recipe.category)
    recipes: Recipe[];
}