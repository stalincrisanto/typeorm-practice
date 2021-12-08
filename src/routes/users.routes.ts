import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.controllers';

const routerUsers = Router();

routerUsers.get('/users', getUsers);
routerUsers.get('/users/:id', getUser);
routerUsers.post('/users', createUser);
routerUsers.put('/users/:id', updateUser);
routerUsers.delete('/users/:id', deleteUser);

export default routerUsers;