"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminDataModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const admin_data_controller_1 = require("./admin-data.controller");
const admin_data_service_1 = require("./admin-data.service");
const admin_collection_schema_1 = require("./../../load-database/schemas/admin-collection.schema");
let AdminDataModule = class AdminDataModule {
};
AdminDataModule = __decorate([
    common_1.Module({
        providers: [admin_data_service_1.AdminDataService],
        controllers: [admin_data_controller_1.AdminDataController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: admin_collection_schema_1.Addresses.name, schema: admin_collection_schema_1.AddressesSchema }
            ])
        ]
    })
], AdminDataModule);
exports.AdminDataModule = AdminDataModule;
//# sourceMappingURL=admin-data.module.js.map