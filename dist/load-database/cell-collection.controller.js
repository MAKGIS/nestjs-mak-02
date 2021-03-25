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
exports.CellCollectionController = void 0;
const common_1 = require("@nestjs/common");
const cell_collection_service_1 = require("./cell-collection.service");
const brand_def_1 = require("../interfaces/brand-def");
const account_addresses_1 = require("./data/account-addresses");
const account_order_details_1 = require("./data/account-order-details");
const account_orders_1 = require("./data/account-orders");
const blog_post_comments_1 = require("./data/blog-post-comments");
const blog_posts_1 = require("./data/blog-posts");
const blog_widget_latest_comments_1 = require("./data/blog-widget-latest-comments");
const data_brands_1 = require("./data/data-brands");
const data_categories_1 = require("./data/data-categories");
const data_products_1 = require("./data/data-products");
const header_departments_1 = require("./data/header-departments");
const header_navigation_1 = require("./data/header-navigation");
const mobile_menu_1 = require("./data/mobile-menu");
const shop_product_reviews_1 = require("./data/shop-product-reviews");
const shop_product_spec_1 = require("./data/shop-product-spec");
let CellCollectionController = class CellCollectionController {
    constructor(cellCollectionService) {
        this.cellCollectionService = cellCollectionService;
    }
    getById(collectionName, _id) {
        return this.cellCollectionService.getById(collectionName, _id, "_id");
    }
    getByIdMany(collectionName, body) {
        return this.cellCollectionService.getByIdMany(collectionName, body);
    }
    getUsers(collectionName) {
        return this.cellCollectionService.getAll(collectionName);
    }
    getByPageMain(collectionName, body) {
        return this.cellCollectionService.getByPageMain(collectionName, body);
    }
    getCountMain(collectionName, body) {
        return this.cellCollectionService.getCountMain(collectionName, body);
    }
    create(collectionName, body) {
        let response = this.cellCollectionService.create(collectionName, body);
        return response;
    }
    remove(collectionName, _id) {
        return this.cellCollectionService.removeOne(collectionName, _id);
    }
    removeMany(collectionName, body) {
        return this.cellCollectionService.removeMany(collectionName, body);
    }
    removeAll(collectionName) {
        return this.cellCollectionService.removeAll(collectionName);
    }
    async update(collectionName, updateBody) {
        let response = this.cellCollectionService.update(collectionName, updateBody);
        return response;
    }
    createdb(collectionName, body) {
        collectionName = collectionName.toLowerCase();
        switch (collectionName) {
            case "addresses":
                collectionName = "addresses";
                body = account_addresses_1.addresses;
                break;
            case "orderditails":
                collectionName = "orderditails";
                body = account_order_details_1.order;
                break;
            case "orders":
                collectionName = "orders";
                body = account_orders_1.ordersAll;
                break;
            case "postcomments":
                collectionName = "postcomments";
                body = blog_post_comments_1.postComments;
                break;
            case "posts":
                collectionName = "posts";
                body = blog_posts_1.posts;
                break;
            case "latestcomments":
                collectionName = "latestcomments";
                body = blog_widget_latest_comments_1.latestComments;
                break;
            case "departments":
                collectionName = "departments";
                body = header_departments_1.departments;
                break;
            case "navigations":
                collectionName = "navigations";
                body = header_navigation_1.navigation;
                break;
            case "mobilemenus":
                collectionName = "mobilemenus";
                body = mobile_menu_1.mobileMenu;
                break;
            case "reviews":
                collectionName = "reviews";
                body = shop_product_reviews_1.reviews;
                break;
            case "specifications":
                collectionName = "specifications";
                body = shop_product_spec_1.specification;
                break;
            case "brands":
                collectionName = "brands";
                body = data_brands_1.brands;
                break;
            case "shopcategories":
                collectionName = "shopcategories";
                body = data_categories_1.shopCategories;
                break;
            case "blogcategories":
                collectionName = "blogcategories";
                body = data_categories_1.blogCategories;
                break;
            case "attributes":
                collectionName = "attributes";
                body = data_products_1.attributes;
                break;
            case "products":
                collectionName = "products";
                body = data_products_1.products;
                break;
        }
        this.cellCollectionService.isFullObject = true;
        let response = this.cellCollectionService.create(collectionName, body);
        return response;
    }
};
__decorate([
    common_1.Get('get/id/:collectionName'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "getById", null);
__decorate([
    common_1.Post('get/id/:collectionName'),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "getByIdMany", null);
__decorate([
    common_1.Get('get/:collectionName'),
    __param(0, common_1.Param('collectionName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "getUsers", null);
__decorate([
    common_1.Post('get/page/:collectionName'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "getByPageMain", null);
__decorate([
    common_1.Post('get/count/:collectionName'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "getCountMain", null);
__decorate([
    common_1.Post('insert/:collectionName'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "create", null);
__decorate([
    common_1.Delete('delete/id/:collectionName'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "remove", null);
__decorate([
    common_1.Post('delete/id/:collectionName'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "removeMany", null);
__decorate([
    common_1.Delete('delete/:collectionName'),
    __param(0, common_1.Param('collectionName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "removeAll", null);
__decorate([
    common_1.Put('update/:collectionName'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "update", null);
__decorate([
    common_1.Post('insertdb/:collectionName'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Header('Cache-Control', 'none'),
    __param(0, common_1.Param('collectionName')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CellCollectionController.prototype, "createdb", null);
CellCollectionController = __decorate([
    common_1.Controller('mongodb'),
    __metadata("design:paramtypes", [cell_collection_service_1.CellCollectionService])
], CellCollectionController);
exports.CellCollectionController = CellCollectionController;
//# sourceMappingURL=cell-collection.controller.js.map