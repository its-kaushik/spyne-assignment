import { Router } from 'express';
import UserController from './user.controller';
import { Validate } from '../../middlewares/validations.middleware';
import { createUserValidation } from './user.validation';
import { Serialize } from '../../middlewares/serializer.middleware';
import { createUserSerializer, getAllUserSerializer } from './user.serializer';

const UserRouter = Router();
const Controller = new UserController();

UserRouter.post(
  '/',
  Validate({ b: createUserValidation }),
  Serialize(createUserSerializer),
  Controller.create
);

UserRouter.get('/', Serialize(getAllUserSerializer), Controller.find);

UserRouter.patch('/', Controller.update);

UserRouter.post('/requestOtp', Controller.requestOtp);

UserRouter.post('/login', Controller.login);

UserRouter.get('/:id', Controller.findOne);

UserRouter.delete('/:id', Controller.delete);

export default UserRouter;
