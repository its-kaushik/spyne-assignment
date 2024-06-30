import { Router } from 'express';
import DiscussionController from './discussion.controller';

const DiscussionRouter = Router();
const Controller = new DiscussionController();

DiscussionRouter.post('/', Controller.create);

DiscussionRouter.get('/', Controller.find);

DiscussionRouter.patch('/', Controller.update);

DiscussionRouter.get('/:id', Controller.findOne);

DiscussionRouter.delete('/:id', Controller.delete);

export default DiscussionRouter;
