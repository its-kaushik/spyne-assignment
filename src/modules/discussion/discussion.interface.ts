import { Schema, Document } from 'mongoose';

export interface DiscussionDocument extends Document {
  user: Schema.Types.ObjectId | string;
  text: string;
  imageLink?: string;
  hashtags: Schema.Types.ObjectId[];
  views: number;
  createdAt: Date;
  updatedAt: Date;
}
