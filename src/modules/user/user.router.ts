import { Router } from 'express';
import UserController from './user.controller';

const UserRouter = Router();
const Controller = new UserController();

UserRouter.post('/', Controller.create);

export default UserRouter;
