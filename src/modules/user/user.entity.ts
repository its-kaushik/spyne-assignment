import mongoose, { Model } from 'mongoose';
import { UserDocument } from './user.interface';
const { Schema, model } = mongoose;

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    countryCode: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<UserDocument> = model<UserDocument>(
  'User',
  userSchema
);
