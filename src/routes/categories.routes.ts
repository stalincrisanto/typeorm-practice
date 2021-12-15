import { Router } from "express";
import { authentication } from "../auth/authentication";
import { getCategory, getCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categories.controller';


const routerCategories = Router();

routerCategories.get('/categories', authentication, getCategories);
routerCategories.get('/categories/:id', authentication, getCategory);
routerCategories.post('/categories', authentication, createCategory);
routerCategories.put('/categories/:id', authentication, updateCategory);
routerCategories.delete('/categories/:id', authentication, deleteCategory);

export default routerCategories;