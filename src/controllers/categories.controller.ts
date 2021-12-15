import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../entity/Category";

export const getCategories = async (req:Request, res:Response) => {
    const {idUser} = req.body;
    console.log(idUser);
    try {
        const categoriesData = await getRepository(Category).find();
        return res.json(categoriesData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getCategory = async (req:Request, res:Response) => {
    const {idUser} = req.body;
    console.log(idUser);
    const id = req.params.id;
    const dataCategory = await getRepository(Category).findOne(id);
    if(dataCategory != null){
        return res.json(dataCategory);
    } else {
        return res.json({msg:`La categoria don id: ${id}, no existe`});
    }
}

export const createCategory = async (req:Request, res:Response) => {
    const {idUser} = req.body;
    console.log(idUser);
    try {
        const newCategory = getRepository(Category).create(req.body);
        const results = await getRepository(Category).save(newCategory);
        return res.json(newCategory);
    } catch (error) {
        res.status(500).json({msg:'No se puede agregar una nueva categoría'});
    }
}

export const updateCategory = async (req:Request, res:Response) => {
    const {idUser} = req.body;
    console.log(idUser);
    const id = req.params.id;
    const categoryData = await getRepository(Category).findOne(id);
    try {
        if(categoryData != null){
            getRepository(Category).merge(categoryData,req.body);
            const results = await getRepository(Category).save(categoryData);
            return res.json(results);
        } else {
            return res.json({msg:`La categoria con id: ${id}, no existe`});
        }
    } catch (error) {
        res.status(500).json({msg:'No se puede modificar la categoría'});
    }
}

export const deleteCategory = async (req:Request, res:Response) => {
    const {idUser} = req.body;
    console.log(idUser);
    const id = req.params.id;
    const categoryData = await getRepository(Category).findOne(id);
    try {
        if(categoryData != null){
            const results = await getRepository(Category).delete(id);
            if(results.affected == 1){
                return res.json({msg:`La categoria con id: ${id} ha sido eliminada`});
            }
        } else {
            return res.json({msg:`La categoria don id: ${id}, no existe`});
        }
    } catch (error) {
        return res.status(500).json({
            message:`No se puede eliminar la categoría con id ${id}`,
            detail: error.detail
        })
    }
}