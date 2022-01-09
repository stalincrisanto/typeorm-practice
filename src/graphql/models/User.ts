import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
@Entity("users")
export class User {
    
    @Field((type) => ID)
    @PrimaryGeneratedColumn()
    idUser:number;

    @Field()
    @Column({
        length: 100,
        nullable: false
    })
    nameUser:string;

    @Field()
    @Column({
        length: 200,
        nullable: false
    })
    emailUser:string;

    @Field()
    @Column({
        length: 100,
        nullable: false
    })
    passwordUser:string;

    /**@Field((type) => [Recipe])
    @OneToMany(type => Recipe, recipe => recipe.user)
    recipes: Recipe[];**/
}