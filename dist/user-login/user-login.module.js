"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_login_controller_1 = require("./user-login.controller");
const user_login_service_1 = require("./user-login.service");
const user_login_schema_1 = require("./schemas/user-login.schema");
let UserLoginModule = class UserLoginModule {
};
UserLoginModule = __decorate([
    common_1.Module({
        providers: [user_login_service_1.UserLoginService],
        controllers: [user_login_controller_1.UserLoginController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: user_login_schema_1.UserLogin.name, schema: user_login_schema_1.UserLoginSchema }
            ])
        ]
    })
], UserLoginModule);
exports.UserLoginModule = UserLoginModule;
//# sourceMappingURL=user-login.module.js.map