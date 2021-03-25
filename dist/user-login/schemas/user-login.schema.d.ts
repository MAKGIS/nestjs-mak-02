import { Document, Schema as MongooseSchema, Types } from 'mongoose';
export declare type UserLoginDocument = UserLogin & Document;
export declare class UserLogin {
    login: string;
    password: string;
    _id?: Types.ObjectId;
}
export declare const UserLoginSchema: MongooseSchema<any>;
