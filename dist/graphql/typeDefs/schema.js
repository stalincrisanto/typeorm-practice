"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = (0, apollo_server_1.gql) `
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
