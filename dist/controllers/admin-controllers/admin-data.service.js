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
exports.AdminDataService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const admin_collection_schema_1 = require("./../../load-database/schemas/admin-collection.schema");
let AdminDataService = class AdminDataService {
    constructor(modelAddresses) {
        this.modelAddresses = modelAddresses;
        this.users = [];
    }
    async getAddresses() {
        return this.modelAddresses.find().exec();
    }
};
AdminDataService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(admin_collection_schema_1.Addresses.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AdminDataService);
exports.AdminDataService = AdminDataService;
//# sourceMappingURL=admin-data.service.js.map