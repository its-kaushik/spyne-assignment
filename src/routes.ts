import { Router, Request, Response } from 'express';
import UserRouter from './modules/user/user.router';
import HashTagRouter from './modules/hashtag/hashtag.router';
import DiscussionRouter from './modules/discussion/discussion.router';
import CommentRouter from './modules/comment/comment.router';
import LikeRouter from './modules/like/like.router';

const router = Router();

router.get('/health', async (req: Request, res: Response) => {
  res.json({ health: 'ok' });
});

router.use('/user', UserRouter);
router.use('/hashtag', HashTagRouter);
router.use('/discussion', DiscussionRouter);
router.use('/comment', CommentRouter);
router.use('/like', LikeRouter);

export default router;
