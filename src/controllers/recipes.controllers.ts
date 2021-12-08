import { Request, Response } from "express";
import { getRepository, Like } from "typeorm";
import { Recipe } from '../entity/Recipe';

export const getRecipes = async (req:Request, res:Response) => {
    try {
        const recipesData = await getRepository(Recipe).find({ relations: ["user","category"] });
        return res.json(recipesData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getRecipe = async (req:Request, res:Response) => {
    const id = req.params.id;
    const recipeData = await getRepository(Recipe).findOne(id,{ relations: ["user","category"] });
    if(recipeData != null){
        return res.json(recipeData);
    } else {
        return res.json({msg:`La receta con id: ${id}, no existe`});
    }
}

export const createRecipe = async (req:Request, res:Response) => {
    try {
        const newRecipe = getRepository(Recipe).create(req.body);
        await getRepository(Recipe).save(newRecipe);
        return res.json(newRecipe);
    } catch (error) {
        return res.status(500).json({
            message:'No se pudo guardar la nueva receta',
            detail: error.detail
        })
    }
}
 
export const updateRecipe = async (req:Request, res:Response) => {
    const id = req.params.id;
    const recipeData = await getRepository(Recipe).findOne(id);
    if(recipeData != null){
        getRepository(Recipe).merge(recipeData,req.body);
        const results = await getRepository(Recipe).save(recipeData);
        return res.json(results);
    } else {
        return res.json({msg:`La receta con id: ${id}, no existe`});
    }
}

export const deleteRecipe = async (req:Request, res:Response) => {
    const id = req.params.id;
    try {
        const recipeData = await getRepository(Recipe).findOne(id);
        if(recipeData != null){
            const results = await getRepository(Recipe).delete(id);
            if(results.affected == 1){
                return res.json({msg:`La categoria con id: ${id} ha sido eliminada`});
            }
        } else {
            return res.json({msg:`La receta con id: ${id}, no existe`});
        }
    } catch (error) {
        return res.status(500).json({error:`No se pudo eliminar el registro con id: ${id}`})
    }
}
/**
export const getRecetaPorCategoria = async (req:Request, res:Response) => {
    const categoria = req.params.categoria;
    const recetaData = await  getRepository(Receta).createQueryBuilder("recetas")
                             .innerJoinAndSelect("categorias.id_categoria","categorias.id_categoria=recetas.id_categoria")
                             .where("categorias.nombre_categoria",{nombre_categoria:Like(`%${categoria}%`)})
                             .getMany();

    //.innerJoinAndSelect("user.photos", "photo", "photo.isRemoved = :isRemoved", { isRemoved: false })
    //.where("user.name = :name", { name: "Timber" })
    //.getOne();
    console.log(recetaData);
    if(recetaData != null){
        return res.json(recetaData);
    } else {
        return res.json({msg:`La receta con categoria ingresada: ${categoria}, no existe`});
    }
}

export const getRecetaPorNombre = async (req:Request, res:Response) => {
    const nombre = req.params.nombre;
    const recetaData = await getRepository(Receta).find({
        nombre_receta: Like(`%${nombre}%`)
    });
    if(recetaData!=null){
        return res.json(recetaData);
    } else {
        return res.json({msg:`La receta con nombre: ${nombre}, no existe`});
    }
}

export const getRecetaPorIngrediente = async (req:Request, res:Response) => {
    const ingrediente = req.params.ingrediente;
    const recetaData = await getRepository(Receta).find({
        ingredientes_receta: Like(`%${ingrediente}%`)
    });
    if(recetaData!=null){
        return res.json(recetaData);
    } else {
        return res.json({msg:`La receta con ingrediente: ${ingrediente}, no existe`});
    }
}**/