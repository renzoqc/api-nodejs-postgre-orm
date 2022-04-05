import { Router } from 'express'
const router = Router();

import { createUsers, getUsers, deleteUser,getUser, updateUser} from '../controllers/user.controller'

router.get('/users',getUsers);
router.post('/users',createUsers); //  Crear
router.get('/users/:id',getUser);
router.put('/users/:id',updateUser); //   Actualizar
router.delete('/users/:id',deleteUser);


export default router;