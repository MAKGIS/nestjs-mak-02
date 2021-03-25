import { Document } from 'mongoose';
export declare type ProviderDocument = Provider & Document;
export declare class Provider {
    login: string;
    password: String;
}
export declare const ProviderSchema: import("mongoose").Schema<any>;
