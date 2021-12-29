import { gql } from "apollo-server";

export const typeDefs = gql`
    type User {
        idUser: Int!
        nameUser: String!
        emailUser: String!
        passwordUser: String!
        recipes: [Recipe!]!
    }

    type Category {
        idCategory: Int!
        nameCategory: String!
        recipes: [Recipe!]!
    }

    type Recipe {
        idRecipe: Int!
        nameRecipe: String!
        descriptionRecipe: String!
        ingredientsRecipe: String!
        user: User
        category: Category
    }

    type Query {
        getAllUsers: [User!]!
        getSingleUser (idUser: Int!): User!
        getAllRecipes: [Recipe]
        getSingleRecipe (idRecipe: Int!) : Recipe
    }
`;