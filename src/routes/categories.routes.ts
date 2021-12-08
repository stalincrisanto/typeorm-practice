import { Router } from "express";
import { getCategory, getCategories, createCategory, updateCategory, deleteCategory } from '../controllers/categories.controller';

const routerCategories = Router();

routerCategories.get('/categories', getCategories);
routerCategories.get('/categories/:id', getCategory);
routerCategories.post('/categories', createCategory);
routerCategories.put('/categories/:id', updateCategory);
routerCategories.delete('/categories/:id', deleteCategory);

export default routerCategories;