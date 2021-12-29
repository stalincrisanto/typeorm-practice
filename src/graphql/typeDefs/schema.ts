import { gql } from "apollo-server";

export const typeDefs = gql`
    type User {
        idUser: Int
        nameUser: String
        emailUser: String
        passwordUser: String
        recipes: [Recipe!]!
    }

    type UserLogin {
        token: String
        user: User
        errors: String
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

    type Mutation {
        generateToken (emailUser: String!, passwordUser: String!): UserLogin
    }
`;