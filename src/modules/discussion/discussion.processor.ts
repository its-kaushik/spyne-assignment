import { BaseProcessor } from '../../common/base.processor';
import Discussion from './discussion.entity';

export default class DiscussionProcessor extends BaseProcessor {
  protected getEntity() {
    return Discussion;
  }
}
