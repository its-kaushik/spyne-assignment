import { BaseProcessor } from '../../common/base.processor';
import Follow from './follow.entity';

export default class FollowProcessor extends BaseProcessor {
  protected getEntity() {
    return Follow;
  }
}
