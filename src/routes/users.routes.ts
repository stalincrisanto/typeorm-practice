import { Router } from "express";
import { login } from "../controllers/login.controller";
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controllers';
import { authentication } from "../auth/authentication";

const routerUsers = Router();

routerUsers.get('/users', authentication, getUsers);
routerUsers.get('/users/:id', authentication, getUser);
routerUsers.post('/users', authentication, createUser);
routerUsers.put('/users/:id', authentication, updateUser);
routerUsers.delete('/users/:id', authentication, deleteUser);
routerUsers.post('/login', login);

export default routerUsers;