import { BaseController } from '../../common/base.controller';
import HashTagProcessor from './hashtag.processor';

export default class HashTagController extends BaseController {
  protected getProcessor() {
    return new HashTagProcessor();
  }
}
