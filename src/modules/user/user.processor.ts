import { BaseProcessor } from '../../common/base.processor';
import { User } from './user.entity';

export default class UserProcessor extends BaseProcessor {
  protected getEntity() {
    return User;
  }
}
