import { NextFunction, Response } from 'express';
import {
  BaseController,
  SerializerRequest,
} from '../../common/base.controller';
import FollowProcessor from './follow.processor';
import { SuccessResponse } from '../../utils';

export default class FollowController extends BaseController {
  protected getProcessor() {
    return new FollowProcessor();
  }

  unfollow = async (
    req: SerializerRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { followingId } = req.params;
    const { userId: followerId } = req.user;
    try {
      this.processor.delete({
        follower: followerId,
        following: followingId,
      });

      SuccessResponse(res, 'User unfollowed successfully!');
    } catch (error) {
      next(error);
    }
  };
}
