import { Model, Schema, model } from 'mongoose';
import { CommentDocument } from './comment.interface';

const commentSchema = new Schema<CommentDocument>(
  {
    discussion: {
      type: Schema.Types.ObjectId,
      ref: 'Discussion',
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    parentComment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment: Model<CommentDocument> = model<CommentDocument>(
  'Comment',
  commentSchema
);
