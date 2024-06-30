import { BaseController } from '../../common/base.controller';
import LikeProcessor from './like.processor';

export default class LikeController extends BaseController {
  protected getProcessor() {
    return new LikeProcessor();
  }
}
