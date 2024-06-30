import { Router } from 'express';
import CommentController from './comment.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import { createCommentSerializer } from './comment.serializer';

const CommentRouter = Router();
const Controller = new CommentController();

CommentRouter.post(
  '/',
  isAuthenticated,
  Serialize(createCommentSerializer),
  Controller.create
);

CommentRouter.get('/', Controller.find);

CommentRouter.patch('/', Controller.update);

CommentRouter.get('/:id', Controller.findOne);

CommentRouter.delete('/:id', Controller.delete);

export default CommentRouter;
