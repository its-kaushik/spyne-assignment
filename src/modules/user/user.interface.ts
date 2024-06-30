export interface UserDocument {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  createdAt?: Date;
  updatedAt?: Date;
}
