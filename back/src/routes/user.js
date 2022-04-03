import { Router } from 'express';
import * as userController from '../controllers/user';
const User = Router();

User.get('/', userController.fetchUsers);

User.get('/:id', userController.fetchUser);

User.post('/register', userController.createUser);

User.put('/:id', userController.updateUser);

User.delete('/:id', userController.deleteUser);


export default User;