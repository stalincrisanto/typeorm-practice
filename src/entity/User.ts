import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Recipe } from './Recipe';

@Entity("users")
export class User {
    
    @PrimaryGeneratedColumn()
    idUser:number;

    @Column({
        length: 100,
        nullable: false
    })
    nameUser:string;

    @Column({
        length: 200,
        nullable: false
    })
    emailUser:string;

    @Column({
        length: 100,
        nullable: false
    })
    passwordUser:string;

    @OneToMany(type => Recipe, recipe => recipe.user)
    recipes: Recipe[];
}