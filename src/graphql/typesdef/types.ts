import { GraphQLSchema, GraphQLObjectType, GraphQLString,GraphQLList, GraphQLInt } from 'graphql';
import { getRepository } from "typeorm";
import { User } from '../../entity/User';;
import { Category } from '../../entity/Category';
import { Recipe } from '../../entity/Recipe';

const userType = new GraphQLObjectType({
    name: 'User',
    fields: {
        nameUser: {
            type: GraphQLString,
        },
        emailUser: {
            type: GraphQLString,
        },
        passwordUser: {
            type: GraphQLString,
        }
    }
})

const categoryType = new GraphQLObjectType({
    name: 'Category',
    fields: {
        nameCategory: {
            type: GraphQLString,
        }
    }
})

const recipeType = new GraphQLObjectType({
    name: 'Recipe',
    fields: {
        idRecipe: {
            type: GraphQLInt,
        },
        nameRecipe: {
            type: GraphQLString,
        },
        descriptionRecipe: {
            type: GraphQLString,
        },
        ingredientsRecipe: {
            type: GraphQLString,
        },
        user: {
            type: userType,
            resolve: async (source, params) => {
                const dataUsers = await getRepository(User).find();
                //console.log(dataUsers);
                return dataUsers;
            }
        },
        category: {
            type: categoryType,
            resolve: async (source, params) => {
                const dataCategories = await getRepository(Category).find();
                //console.log(dataCategories);
                return dataCategories;
            }
        }
    }
})

export {userType, categoryType, recipeType};