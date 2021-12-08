"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersData = yield (0, typeorm_1.getRepository)(User_1.User).find();
        return res.json(usersData);
    }
    catch (error) {
        console.log(error);
        return res.json({ msg: 'Ha ocurrido un error' });
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userData = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    if (userData != null) {
        return res.json(userData);
    }
    else {
        return res.json({ msg: `El usuario con id: ${id}, no existe` });
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = (0, typeorm_1.getRepository)(User_1.User).create(req.body);
        const results = yield (0, typeorm_1.getRepository)(User_1.User).save(newUser);
        return res.json(newUser);
    }
    catch (error) {
        res.status(500).json({ msg: 'No se puede agregar un nuevo usuario' });
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userData = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    try {
        if (userData != null) {
            (0, typeorm_1.getRepository)(User_1.User).merge(userData, req.body);
            const results = yield (0, typeorm_1.getRepository)(User_1.User).save(userData);
            return res.json(results);
        }
        else {
            return res.json({ msg: `El usuario con id: ${id}, no existe` });
        }
    }
    catch (error) {
        res.status(500).json({ msg: 'No se puede modificar el usuario' });
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const userData = yield (0, typeorm_1.getRepository)(User_1.User).findOne(id);
    try {
        if (userData != null) {
            const results = yield (0, typeorm_1.getRepository)(User_1.User).delete(id);
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
});
exports.deleteUser = deleteUser;
