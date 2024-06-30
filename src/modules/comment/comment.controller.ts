import { NextFunction, Response } from 'express';
import {
  BaseController,
  SerializerRequest,
} from '../../common/base.controller';
import CommentProcessor from './comment.processor';

export default class CommentController extends BaseController {
  protected getProcessor() {
    return new CommentProcessor();
  }
}
