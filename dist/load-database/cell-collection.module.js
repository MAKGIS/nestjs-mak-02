"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CellCollectionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cell_collection_controller_1 = require("./cell-collection.controller");
const cell_collection_service_1 = require("./cell-collection.service");
const cell_collection_schema_1 = require("./schemas/cell-collection.schema");
const cell_collection_schema_2 = require("./schemas/cell-collection.schema");
const admin_collection_schema_1 = require("./schemas/admin-collection.schema");
let CellCollectionModule = class CellCollectionModule {
};
CellCollectionModule = __decorate([
    common_1.Module({
        providers: [cell_collection_service_1.CellCollectionService],
        controllers: [cell_collection_controller_1.CellCollectionController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: cell_collection_schema_1.CellCollection.name, schema: cell_collection_schema_1.CellCollectionSchema },
                { name: cell_collection_schema_2.Brands.name, schema: cell_collection_schema_2.BrandsSchema },
                { name: cell_collection_schema_2.ShopCategories.name, schema: cell_collection_schema_2.ShopCategoriesSchema },
                { name: cell_collection_schema_2.BlogCategories.name, schema: cell_collection_schema_2.BlogCategoriesSchema },
                { name: cell_collection_schema_2.Products.name, schema: cell_collection_schema_2.ProductsSchema },
                { name: cell_collection_schema_2.Attributes.name, schema: cell_collection_schema_2.AttributesSchema },
                { name: admin_collection_schema_1.Addresses.name, schema: admin_collection_schema_1.AddressesSchema },
                { name: admin_collection_schema_1.OrderDitails.name, schema: admin_collection_schema_1.OrderDitailsSchema },
                { name: admin_collection_schema_1.Orders.name, schema: admin_collection_schema_1.OrdersSchema },
                { name: admin_collection_schema_1.Posts.name, schema: admin_collection_schema_1.PostsSchema },
                { name: admin_collection_schema_1.PostComments.name, schema: admin_collection_schema_1.PostCommentsSchema },
                { name: admin_collection_schema_1.LatestComments.name, schema: admin_collection_schema_1.LatestCommentsSchema },
                { name: admin_collection_schema_1.NavigationLinks.name, schema: admin_collection_schema_1.NavigationLinksSchema },
                { name: admin_collection_schema_1.Navigations.name, schema: admin_collection_schema_1.NavigationsSchema },
                { name: admin_collection_schema_1.MobileMenus.name, schema: admin_collection_schema_1.MobileMenusSchema },
                { name: admin_collection_schema_1.Reviews.name, schema: admin_collection_schema_1.ReviewsSchema },
                { name: admin_collection_schema_1.Specifications.name, schema: admin_collection_schema_1.SpecificationsSchema },
            ])
        ]
    })
], CellCollectionModule);
exports.CellCollectionModule = CellCollectionModule;
//# sourceMappingURL=cell-collection.module.js.map