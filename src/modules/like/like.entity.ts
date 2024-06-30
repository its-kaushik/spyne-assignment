import mongoose, { Model } from 'mongoose';
import { LikeDocument } from './like.interface';
const { Schema, model } = mongoose;

const likeSchema = new Schema<LikeDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    discussion: {
      type: Schema.Types.ObjectId,
      ref: 'Discussion',
      default: null,
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Like: Model<LikeDocument> = model<LikeDocument>(
  'Like',
  likeSchema
);
