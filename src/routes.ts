import { Router, Request, Response } from 'express';
import UserRouter from './modules/user/user.router';
import HashTagRouter from './modules/hashtag/hashtag.router';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});

router.use('/user', UserRouter);
router.use('/hashtag', HashTagRouter);

export default router;
