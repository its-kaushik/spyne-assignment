import { Router } from 'express';
import DiscussionController from './discussion.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import {
  createDiscussionSerializer,
  getAllDiscussionsSerializer,
  getDiscussionViewCountSerializer,
} from './discussion.serializer';

const DiscussionRouter = Router();
const Controller = new DiscussionController();

DiscussionRouter.post(
  '/',
  isAuthenticated,
  Serialize(createDiscussionSerializer),
  Controller.create
);

DiscussionRouter.get(
  '/',
  Serialize(getAllDiscussionsSerializer),
  Controller.find
);

DiscussionRouter.patch('/', Controller.update);

DiscussionRouter.get(
  '/:id/viewcount',
  Serialize(getDiscussionViewCountSerializer),
  Controller.findOne
);

DiscussionRouter.get('/:id', Controller.findOne);

DiscussionRouter.delete('/:id', Controller.delete);

export default DiscussionRouter;
