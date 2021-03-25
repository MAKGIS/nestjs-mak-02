"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginController = void 0;
const common_1 = require("@nestjs/common");
const user_login_dto_1 = require("./dto/user-login.dto");
const user_login_service_1 = require("./user-login.service");
let UserLoginController = class UserLoginController {
    constructor(userLoginService) {
        this.userLoginService = userLoginService;
    }
    getUsers() {
        return this.userLoginService.getAll();
    }
    create(userLoginDto) {
        return this.userLoginService.create(userLoginDto);
    }
    remove(id) {
        return this.userLoginService.remove(id);
    }
    update(updateUserLoginDto, id) {
        return this.userLoginService.update(id, updateUserLoginDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "getUsers", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UserLoginDto]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "remove", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_login_dto_1.UpdateUserLoginDto, String]),
    __metadata("design:returntype", Promise)
], UserLoginController.prototype, "update", null);
UserLoginController = __decorate([
    common_1.Controller('user-login'),
    __metadata("design:paramtypes", [user_login_service_1.UserLoginService])
], UserLoginController);
exports.UserLoginController = UserLoginController;
//# sourceMappingURL=user-login.controller.js.map