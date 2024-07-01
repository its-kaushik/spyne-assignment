import { Types, Document } from 'mongoose';

export interface FollowDocument extends Document {
  follower: Types.ObjectId;
  following: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}
