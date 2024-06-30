import { Router } from 'express';
import HashTagController from './hashtag.controller';

const HashTagRouter = Router();
const Controller = new HashTagController();

HashTagRouter.post('/', Controller.create);

HashTagRouter.get('/', Controller.find);

HashTagRouter.patch('/', Controller.update);

HashTagRouter.get('/:id', Controller.findOne);

HashTagRouter.delete('/:id', Controller.delete);

export default HashTagRouter;
