import { Document, Schema as MongooseSchema, Types } from 'mongoose';
export declare type Name1Document = Name1 & Document;
export declare class Name1 {
    login: string;
    password: string;
    _id?: Types.ObjectId;
}
export declare const Name1Schema: MongooseSchema<any>;
