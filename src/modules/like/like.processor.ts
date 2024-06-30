import { BaseProcessor } from '../../common/base.processor';
import { Like } from './like.entity';

export default class LikeProcessor extends BaseProcessor {
  protected getEntity() {
    return Like;
  }
}
