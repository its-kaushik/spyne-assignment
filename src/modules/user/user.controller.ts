import { NextFunction, Response } from 'express';
import {
  BaseController,
  SerializerRequest,
} from '../../common/base.controller';
import UserProcessor from './user.processor';
import { SuccessResponse } from '../../utils';
import { envs } from '../../env';
import { PRODUCTION } from '../../common/constants';

export default class UserController extends BaseController {
  protected getProcessor() {
    return new UserProcessor();
  }

  requestOtp = async (
    req: SerializerRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { email } = req.body;
    try {
      const otp: string = await this.processor.requestOtp(email);
      SuccessResponse(res, {
        ...(envs.NODE_ENV !== PRODUCTION && { otp }),
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: SerializerRequest, res: Response, next: NextFunction) => {
    const { email, otp } = req.body;
    try {
      const token = await this.processor.login(email, otp);

      SuccessResponse(res, { token });
    } catch (error) {
      next(error);
    }
  };
}
