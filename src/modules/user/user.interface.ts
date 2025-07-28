import { Types } from 'mongoose';

export interface IUser {
  _id: Types.ObjectId;
  status: number; // 1 or 0
  first_name: string;
  last_name: string;
  email: string;
  contact: string;
  password: string;
  image: string;
  isverified: boolean
  role: "user" | "admin";
  verification: {
    otp: string | number;
    expiresAt: Date;
    status: boolean;
  };
  date_of_birth: Date;
  notification: boolean,
  isSocialLogin: boolean
  isDeleted: boolean
}

