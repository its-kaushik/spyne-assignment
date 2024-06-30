import { Document } from 'mongoose';

export interface HashTagDocument extends Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
