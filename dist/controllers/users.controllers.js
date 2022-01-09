"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const getUsers = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    try {
        const usersData = await (0, typeorm_1.getRepository)(User_1.User).find();
        return res.json(usersData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
};
exports.getUsers = getUsers;
const getUser = async (req, res) => {
    // Get
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const userData = await (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    if (userData != null) {
        return res.json(userData);
    }
    else {
        return res.json({ msg: `El usuario con id: ${id}, no existe` });
    }
};
exports.getUser = getUser;
const createUser = async (req, res) => {
    const { nameUser, emailUser, passwordUser, idUser } = req.body;
    console.log(idUser);
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(passwordUser, salt, async (err, hash) => {
            try {
                const newUser = (0, typeorm_1.getRepository)(User_1.User).create({ nameUser, emailUser, passwordUser: hash });
                await (0, typeorm_1.getRepository)(User_1.User).save(newUser);
                return res.json(newUser);
            }
            catch (error) {
                return res.status(500).json({ msg: 'No se puede agregar un nuevo usuario' });
            }
        });
    });
};
exports.createUser = createUser;
const updateUser = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const userData = await (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    try {
        if (userData != null) {
            (0, typeorm_1.getRepository)(User_1.User).merge(userData, req.body);
            const results = await (0, typeorm_1.getRepository)(User_1.User).save(userData);
            return res.json(results);
        }
        else {
            return res.json({ msg: `El usuario con id: ${id}, no existe` });
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'No se puede modificar el usuario' });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    const { idUser } = req.body;
    console.log(idUser);
    const id = req.params.id;
    const userData = await (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    try {
        if (userData != null) {
            const results = await (0, typeorm_1.getRepository)(User_1.User).delete(id);
            if (results.affected == 1) {
                return res.json({ msg: `El usuario con id: ${id} ha sido eliminada` });
            }
        }
        else {
            return res.json({ msg: `El usuario con id: ${id}, no existe` });
        }
    }
    catch (error) {
        return res.status(500).json({
            message: `No se puede eliminar el usuario con id ${id}`,
            detail: error.detail
        });
    }
};
exports.deleteUser = deleteUser;
