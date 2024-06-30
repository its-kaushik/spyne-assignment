import { BaseController } from '../../common/base.controller';
import DiscussionProcessor from './discussion.processor';

export default class DiscussionController extends BaseController {
  protected getProcessor() {
    return new DiscussionProcessor();
  }
}
