import { Model, Schema, model } from 'mongoose';
import { FollowDocument } from './follow.interface';

const followSchema = new Schema<FollowDocument>(
  {
    follower: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    following: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

followSchema.index({ follower: 1, following: 1 }, { unique: true });

const Follow: Model<FollowDocument> = model<FollowDocument>(
  'Follow',
  followSchema
);

export default Follow;
