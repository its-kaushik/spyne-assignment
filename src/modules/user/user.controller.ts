import { BaseController } from '../../common/base.controller';
import UserProcessor from './user.processor';

export default class UserController extends BaseController {
  protected getProcessor() {
    return new UserProcessor();
  }
}
