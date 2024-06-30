import { Document, Types } from 'mongoose';

export interface LikeDocument extends Document {
  user: Types.ObjectId;
  discussion?: Types.ObjectId | null;
  comment?: Types.ObjectId | null;
}
