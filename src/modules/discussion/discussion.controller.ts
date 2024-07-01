import { NextFunction, Response } from 'express';
import {
  BaseController,
  SerializerRequest,
} from '../../common/base.controller';
import DiscussionProcessor from './discussion.processor';
import { SuccessResponse } from '../../utils';
import { DiscussionDocument } from './discussion.interface';

export default class DiscussionController extends BaseController {
  protected getProcessor() {
    return new DiscussionProcessor();
  }

  findOne = async (
    req: SerializerRequest,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    try {
      const { populate = null, select = null, transform = null } = req;
      let record: DiscussionDocument = await this.processor.findOne(
        { _id: id },
        populate,
        select
      );

      record.views += 1;

      await record.save();

      if (transform) {
        record = transform(record);
      }
      SuccessResponse(res, record);
    } catch (error) {
      next(error);
    }
  };
}
