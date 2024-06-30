import { Schema } from 'mongoose';

export interface DiscussionDocument extends Document {
  user: Schema.Types.ObjectId | string;
  text: string;
  imageLink?: string;
  hashtags: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
