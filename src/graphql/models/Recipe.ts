import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";
import { User } from "./User";
import { Category } from "./Category";
@ObjectType()
@Entity("recipes")
export class Recipe {
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    idRecipe:number;

    @Field()
    @Column()
    nameRecipe:string;

    @Field()
    @Column()
    descriptionRecipe:string;

    @Field()
    @Column()
    ingredientsRecipe:string;

    @Field((type) => User)
    @ManyToOne(type => User, user => user.recipes)
    user: User;

    @Field((type) => Category)
    @ManyToOne(type => Category, category => category.recipes)
    category: Category;

    @Column()
    userIdUser: number;

    @Column()
    categoryIdCategory: number;
}
// import { Category } from './Category';
// import { User } from './User';

// @Entity("recipes")
// export class Recipe {
    
//     @PrimaryGeneratedColumn()
//     idRecipe:number;

//     @Column()
//     nameRecipe:string;

//     @Column()
//     descriptionRecipe:string;

//     @Column()
//     ingredientsRecipe:string;

//     @ManyToOne(type => User, user => user.recipes)
//     user: User;
    
//     @ManyToOne(type => Category, category => category.recipes)
//     category: Category;
// }