import { Router } from 'express';
import DiscussionController from './discussion.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import { createDiscussionSerializer } from './discussion.serializer';

const DiscussionRouter = Router();
const Controller = new DiscussionController();

DiscussionRouter.post(
  '/',
  isAuthenticated,
  Serialize(createDiscussionSerializer),
  Controller.create
);

DiscussionRouter.get('/', Controller.find);

DiscussionRouter.patch('/', Controller.update);

DiscussionRouter.get('/:id', Controller.findOne);

DiscussionRouter.delete('/:id', Controller.delete);

export default DiscussionRouter;
