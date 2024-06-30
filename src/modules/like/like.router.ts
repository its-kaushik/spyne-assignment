import { Router } from 'express';
import LikeController from './like.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import { createLikeSerializer } from './like.serializer';

const LikeRouter = Router();
const Controller = new LikeController();

LikeRouter.post(
  '/',
  isAuthenticated,
  Serialize(createLikeSerializer),
  Controller.create
);

LikeRouter.get('/', Controller.find);

LikeRouter.patch('/', Controller.update);

LikeRouter.get('/:id', Controller.findOne);

LikeRouter.delete('/:id', Controller.delete);

export default LikeRouter;
