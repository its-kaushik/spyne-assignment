import { Router } from 'express';
import FollowController from './follow.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';
import { Serialize } from '../../middlewares/serializer.middleware';
import { createFollowSerializer } from './follow.serializer';

const FollowRouter = Router();
const Controller = new FollowController();

FollowRouter.post(
  '/',
  isAuthenticated,
  Serialize(createFollowSerializer),
  Controller.create
);

FollowRouter.get('/', Controller.find);

FollowRouter.post(
  '/unfollow/:followingId',
  isAuthenticated,
  Controller.unfollow
);

export default FollowRouter;
