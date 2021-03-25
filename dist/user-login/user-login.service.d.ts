import { Model } from 'mongoose';
import { UserLoginDto, UpdateUserLoginDto } from './dto/user-login.dto';
import { UserLogin, UserLoginDocument } from './schemas/user-login.schema';
export declare class UserLoginService {
    private model;
    private users;
    constructor(model: Model<UserLoginDocument>);
    getAll(): Promise<UserLogin[]>;
    getGyId(login: string): Promise<UserLogin>;
    create(userLoginDto: UserLoginDto): Promise<UserLogin>;
    remove(id: string): Promise<UserLogin>;
    update(id: string, updateUserLoginDto: UpdateUserLoginDto): Promise<UserLogin>;
}
