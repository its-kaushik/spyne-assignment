import { BaseProcessor } from '../../common/base.processor';
import { Comment } from './comment.entity';

export default class CommentProcessor extends BaseProcessor {
  protected getEntity() {
    return Comment;
  }
}
