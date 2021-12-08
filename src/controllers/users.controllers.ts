import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from '../entity/User';

export const getUsers = async (req:Request, res:Response) => {
    try {
        const usersData = await getRepository(User).find();
        return res.json(usersData);
    } catch (error) {
        console.log(error);
        return res.json({msg:'Ha ocurrido un error'});
    }
}

export const getUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const userData = await getRepository(User).findOne(id);
    if(userData != null){
        return res.json(userData);
    } else {
        return res.json({msg:`El usuario con id: ${id}, no existe`});
    }
}

export const createUser = async (req:Request, res:Response) => {
    try {
        const newUser = getRepository(User).create(req.body);
        const results = await getRepository(User).save(newUser);
        return res.json(newUser);
    } catch (error) {
        res.status(500).json({msg:'No se puede agregar un nuevo usuario'});
    }
}

export const updateUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const userData = await getRepository(User).findOne(id);
    try {
        if(userData != null){
            getRepository(User).merge(userData,req.body);
            const results = await getRepository(User).save(userData);
            return res.json(results);
        } else {
            return res.json({msg:`El usuario con id: ${id}, no existe`});
        }
    } catch (error) {
        res.status(500).json({msg:'No se puede modificar el usuario'});
    }
}

export const deleteUser = async (req:Request, res:Response) => {
    const id = req.params.id;
    const userData = await getRepository(User).findOne(id);
    try {
        if(userData != null){
            const results = await getRepository(User).delete(id);
            if(results.affected == 1){
                return res.json({msg:`El usuario con id: ${id} ha sido eliminada`});
            }
        } else {
            return res.json({msg:`El usuario con id: ${id}, no existe`});
        }
    } catch (error) {
        return res.status(500).json({
            message:`No se puede eliminar el usuario con id ${id}`,
            detail: error.detail
        })
    }
}