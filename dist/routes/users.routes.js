"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const routerUsers = (0, express_1.Router)();
routerUsers.get('/users', users_controllers_1.getUsers);
routerUsers.get('/users/:id', users_controllers_1.getUser);
routerUsers.post('/users', users_controllers_1.createUser);
routerUsers.put('/users/:id', users_controllers_1.updateUser);
routerUsers.delete('/users/:id', users_controllers_1.deleteUser);
exports.default = routerUsers;
