"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_module_1 = require("@nestjs/mongoose/dist/mongoose.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const user_login_module_1 = require("./user-login/user-login.module");
const cell_collection_module_1 = require("./load-database/cell-collection.module");
const admin_data_module_1 = require("./controllers/admin-controllers/admin-data.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            user_login_module_1.UserLoginModule,
            cell_collection_module_1.CellCollectionModule,
            admin_data_module_1.AdminDataModule,
            mongoose_module_1.MongooseModule.forRoot('mongodb://localhost:27017/stroyka?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useFindAndModify: false })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map