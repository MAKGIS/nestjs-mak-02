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
exports.ProviderLoginController = void 0;
const common_1 = require("@nestjs/common");
const providers_dto_1 = require("./dto/providers.dto");
const providers_service_1 = require("./providers.service");
let ProviderLoginController = class ProviderLoginController {
    constructor(providersService) {
        this.providersService = providersService;
    }
    getProviders() {
        return this.providersService;
    }
    create(providerLoginDto) {
        return 'Login: ' + providerLoginDto.login + '  password: ' + providerLoginDto.password;
    }
    remove(id) {
        return 'Remove ' + id;
    }
    update(updateProviderLoginDto, id) {
        return 'Update: ' + id + '   body: ' + JSON.stringify(updateProviderLoginDto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProviderLoginController.prototype, "getProviders", null);
__decorate([
    common_1.Post(),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [providers_dto_1.ProviderLoginDto]),
    __metadata("design:returntype", String)
], ProviderLoginController.prototype, "create", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProviderLoginController.prototype, "remove", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Body()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [providers_dto_1.UpdateProviderLoginDto, String]),
    __metadata("design:returntype", void 0)
], ProviderLoginController.prototype, "update", null);
ProviderLoginController = __decorate([
    common_1.Controller('provider-login'),
    __metadata("design:paramtypes", [providers_service_1.ProvidersService])
], ProviderLoginController);
exports.ProviderLoginController = ProviderLoginController;
//# sourceMappingURL=provider-login.controller.js.map