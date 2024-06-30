import { Types, Document } from 'mongoose';

export interface CommentDocument extends Document {
  discussion: Types.ObjectId;
  user: Types.ObjectId;
  parentComment?: Types.ObjectId | null;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}
