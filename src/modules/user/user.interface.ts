import { Document } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}
