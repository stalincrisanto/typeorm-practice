"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRecipe = exports.updateRecipe = exports.createRecipe = exports.getRecipe = exports.getRecipes = void 0;
const typeorm_1 = require("typeorm");
const Recipe_1 = require("../entity/Recipe");
const getRecipes = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        const recipesData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).find({ relations: ["user", "category"] });
        return res.json(recipesData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
};
exports.getRecipes = getRecipes;
const getRecipe = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const recipeData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(id, { relations: ["user", "category"] });
    if (recipeData != null) {
        return res.json(recipeData);
    }
    else {
        return res.json({ msg: `La receta con id: ${id}, no existe` });
    }
};
exports.getRecipe = getRecipe;
const createRecipe = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        const newRecipe = (0, typeorm_1.getRepository)(Recipe_1.Recipe).create(req.body);
        await (0, typeorm_1.getRepository)(Recipe_1.Recipe).save(newRecipe);
        return res.json(newRecipe);
    }
    catch (error) {
        return res.status(500).json({
            message: 'No se pudo guardar la nueva receta',
            detail: error.detail
        });
    }
};
exports.createRecipe = createRecipe;
const updateRecipe = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const recipeData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(id);
    if (recipeData != null) {
        (0, typeorm_1.getRepository)(Recipe_1.Recipe).merge(recipeData, req.body);
        const results = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).save(recipeData);
        return res.json(results);
    }
    else {
        return res.json({ msg: `La receta con id: ${id}, no existe` });
    }
};
exports.updateRecipe = updateRecipe;
const deleteRecipe = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    try {
        const recipeData = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).findOne(id);
        if (recipeData != null) {
            const results = await (0, typeorm_1.getRepository)(Recipe_1.Recipe).delete(id);
            if (results.affected == 1) {
                return res.json({ msg: `La categoria con id: ${id} ha sido eliminada` });
            }
        }
        else {
            return res.json({ msg: `La receta con id: ${id}, no existe` });
        }
    }
    catch (error) {
        return res.status(500).json({ error: `No se pudo eliminar el registro con id: ${id}` });
    }
};
exports.deleteRecipe = deleteRecipe;
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
