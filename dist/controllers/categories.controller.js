"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getCategory = exports.getCategories = void 0;
const typeorm_1 = require("typeorm");
const Category_1 = require("../entity/Category");
const getCategories = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        const categoriesData = await (0, typeorm_1.getRepository)(Category_1.Category).find();
        return res.json(categoriesData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
};
exports.getCategories = getCategories;
const getCategory = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const dataCategory = await (0, typeorm_1.getRepository)(Category_1.Category).findOne(id);
    if (dataCategory != null) {
        return res.json(dataCategory);
    }
    else {
        return res.json({ msg: `La categoria don id: ${id}, no existe` });
    }
};
exports.getCategory = getCategory;
const createCategory = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        const newCategory = (0, typeorm_1.getRepository)(Category_1.Category).create(req.body);
        const results = await (0, typeorm_1.getRepository)(Category_1.Category).save(newCategory);
        return res.json(newCategory);
    }
    catch (error) {
        res.status(500).json({ msg: 'No se puede agregar una nueva categoría' });
    }
};
exports.createCategory = createCategory;
const updateCategory = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const categoryData = await (0, typeorm_1.getRepository)(Category_1.Category).findOne(id);
    try {
        if (categoryData != null) {
            (0, typeorm_1.getRepository)(Category_1.Category).merge(categoryData, req.body);
            const results = await (0, typeorm_1.getRepository)(Category_1.Category).save(categoryData);
            return res.json(results);
        }
        else {
            return res.json({ msg: `La categoria con id: ${id}, no existe` });
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'No se puede modificar la categoría' });
    }
};
exports.updateCategory = updateCategory;
const deleteCategory = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const categoryData = await (0, typeorm_1.getRepository)(Category_1.Category).findOne(id);
    try {
        if (categoryData != null) {
            const results = await (0, typeorm_1.getRepository)(Category_1.Category).delete(id);
            if (results.affected == 1) {
                return res.json({ msg: `La categoria con id: ${id} ha sido eliminada` });
            }
        }
        else {
            return res.json({ msg: `La categoria don id: ${id}, no existe` });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: `No se puede eliminar la categoría con id ${id}`,
            detail: error.detail
        });
    }
};
exports.deleteCategory = deleteCategory;
