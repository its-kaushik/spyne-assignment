import mongoose, { Model } from 'mongoose';
import { DiscussionDocument } from './discussion.interface';
const { Schema, model } = mongoose;

const discussionSchema = new Schema<DiscussionDocument>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    imageLink: {
      type: String,
    },
    hashtags: [
      {
        type: Schema.Types.ObjectId,
        ref: 'HashTag',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Discussion: Model<DiscussionDocument> = model<DiscussionDocument>(
  'Discussion',
  discussionSchema
);

export default Discussion;
