import mongoose, { Model } from 'mongoose';
import { HashTagDocument } from './hashtag.interface';
const { Schema, model } = mongoose;

const hashTagSchema = new Schema<HashTagDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const HashTag: Model<HashTagDocument> = model<HashTagDocument>(
  'HashTag',
  hashTagSchema
);
