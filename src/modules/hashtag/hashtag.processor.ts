import { BaseProcessor } from '../../common/base.processor';
import { HashTag } from './hashtag.entity';

export default class HashTagProcessor extends BaseProcessor {
  protected getEntity() {
    return HashTag;
  }
}
