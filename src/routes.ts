import { Router, Request, Response } from 'express';
import UserRouter from './modules/user/user.router';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});

router.use('/user', UserRouter);

export default router;
