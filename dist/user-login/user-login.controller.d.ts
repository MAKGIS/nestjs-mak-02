import { UserLoginDto, UpdateUserLoginDto } from './dto/user-login.dto';
import { UserLogin } from './schemas/user-login.schema';
import { UserLoginService } from './user-login.service';
export declare class UserLoginController {
    private readonly userLoginService;
    constructor(userLoginService: UserLoginService);
    getUsers(): Promise<UserLogin[]>;
    create(userLoginDto: UserLoginDto): Promise<UserLogin>;
    remove(id: string): Promise<UserLogin>;
    update(updateUserLoginDto: UpdateUserLoginDto, id: string): Promise<UserLogin>;
}
