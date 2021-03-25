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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificationsSchema = exports.Specifications = exports.DBProductFeature = exports.ReviewsSchema = exports.Reviews = exports.MobileMenusSchema = exports.MobileMenus = exports.NavigationsSchema = exports.Navigations = exports.NavigationLinksSchema = exports.NavigationLinks = exports.DBMegamenu = exports.DBMegamenuColumn = exports.DBLink = exports.LatestCommentsSchema = exports.LatestComments = exports.PostCommentsSchema = exports.PostComments = exports.DBPostComment = exports.PostsSchema = exports.Posts = exports.OrdersSchema = exports.Orders = exports.OrderDitailsSchema = exports.OrderDitails = exports.DBOrderItems = exports.DBOptions = exports.DBAdditionalLines = exports.AddressesSchema = exports.Addresses = exports.DBAddress = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let DBAddress = class DBAddress {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], DBAddress.prototype, "default", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "city", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "postcode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAddress.prototype, "address", void 0);
DBAddress = __decorate([
    mongoose_1.Schema()
], DBAddress);
exports.DBAddress = DBAddress;
let Addresses = class Addresses {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Addresses.prototype, "default", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "city", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "postcode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Addresses.prototype, "address", void 0);
Addresses = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Addresses);
exports.Addresses = Addresses;
exports.AddressesSchema = mongoose_1.SchemaFactory.createForClass(Addresses);
let DBAdditionalLines = class DBAdditionalLines {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBAdditionalLines.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBAdditionalLines.prototype, "total", void 0);
DBAdditionalLines = __decorate([
    mongoose_1.Schema()
], DBAdditionalLines);
exports.DBAdditionalLines = DBAdditionalLines;
let DBOptions = class DBOptions {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBOptions.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBOptions.prototype, "value", void 0);
DBOptions = __decorate([
    mongoose_1.Schema()
], DBOptions);
exports.DBOptions = DBOptions;
let DBOrderItems = class DBOrderItems {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBOrderItems.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBOrderItems.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBOrderItems.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBOrderItems.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBOrderItems.prototype, "options", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBOrderItems.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBOrderItems.prototype, "quantity", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBOrderItems.prototype, "total", void 0);
DBOrderItems = __decorate([
    mongoose_1.Schema()
], DBOrderItems);
exports.DBOrderItems = DBOrderItems;
let OrderDitails = class OrderDitails {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], OrderDitails.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], OrderDitails.prototype, "items", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "phone", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "country", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "city", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "postcode", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "address", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], OrderDitails.prototype, "additionalLines", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], OrderDitails.prototype, "quantity", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], OrderDitails.prototype, "subtotal", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], OrderDitails.prototype, "total", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], OrderDitails.prototype, "paymentMethod", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DBAddress)
], OrderDitails.prototype, "shippingAddress", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", DBAddress)
], OrderDitails.prototype, "billingAddress", void 0);
OrderDitails = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], OrderDitails);
exports.OrderDitails = OrderDitails;
exports.OrderDitailsSchema = mongoose_1.SchemaFactory.createForClass(OrderDitails);
let Orders = class Orders {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Orders.prototype, "id", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Orders.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Orders.prototype, "status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Orders.prototype, "total", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Orders.prototype, "quantity", void 0);
Orders = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Orders);
exports.Orders = Orders;
exports.OrdersSchema = mongoose_1.SchemaFactory.createForClass(Orders);
let Posts = class Posts {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Posts.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Posts.prototype, "categories", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Posts.prototype, "date", void 0);
Posts = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Posts);
exports.Posts = Posts;
exports.PostsSchema = mongoose_1.SchemaFactory.createForClass(Posts);
let DBPostComment = class DBPostComment {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBPostComment.prototype, "author", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBPostComment.prototype, "avatar", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBPostComment.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBPostComment.prototype, "text", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBPostComment.prototype, "postTitle", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBPostComment.prototype, "children", void 0);
DBPostComment = __decorate([
    mongoose_1.Schema()
], DBPostComment);
exports.DBPostComment = DBPostComment;
let PostComments = class PostComments {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], PostComments.prototype, "count", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], PostComments.prototype, "items", void 0);
PostComments = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], PostComments);
exports.PostComments = PostComments;
exports.PostCommentsSchema = mongoose_1.SchemaFactory.createForClass(PostComments);
let LatestComments = class LatestComments {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], LatestComments.prototype, "author", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], LatestComments.prototype, "avatar", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], LatestComments.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], LatestComments.prototype, "text", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], LatestComments.prototype, "postTitle", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], LatestComments.prototype, "children", void 0);
LatestComments = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], LatestComments);
exports.LatestComments = LatestComments;
exports.LatestCommentsSchema = mongoose_1.SchemaFactory.createForClass(LatestComments);
let DBLink = class DBLink {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBLink.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBLink.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBLink.prototype, "items", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], DBLink.prototype, "external", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBLink.prototype, "target", void 0);
DBLink = __decorate([
    mongoose_1.Schema()
], DBLink);
exports.DBLink = DBLink;
let DBMegamenuColumn = class DBMegamenuColumn {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], DBMegamenuColumn.prototype, "size", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBMegamenuColumn.prototype, "items", void 0);
DBMegamenuColumn = __decorate([
    mongoose_1.Schema()
], DBMegamenuColumn);
exports.DBMegamenuColumn = DBMegamenuColumn;
let DBMegamenu = class DBMegamenu {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBMegamenu.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBMegamenu.prototype, "size", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBMegamenu.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBMegamenu.prototype, "columns", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], DBMegamenu.prototype, "items", void 0);
DBMegamenu = __decorate([
    mongoose_1.Schema()
], DBMegamenu);
exports.DBMegamenu = DBMegamenu;
let NavigationLinks = class NavigationLinks {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], NavigationLinks.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], NavigationLinks.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], NavigationLinks.prototype, "menu", void 0);
NavigationLinks = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], NavigationLinks);
exports.NavigationLinks = NavigationLinks;
exports.NavigationLinksSchema = mongoose_1.SchemaFactory.createForClass(NavigationLinks);
let Navigations = class Navigations {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Navigations.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Navigations.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Navigations.prototype, "menu", void 0);
Navigations = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Navigations);
exports.Navigations = Navigations;
exports.NavigationsSchema = mongoose_1.SchemaFactory.createForClass(Navigations);
let MobileMenus = class MobileMenus {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MobileMenus.prototype, "type", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MobileMenus.prototype, "url", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MobileMenus.prototype, "label", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], MobileMenus.prototype, "data", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], MobileMenus.prototype, "children", void 0);
MobileMenus = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], MobileMenus);
exports.MobileMenus = MobileMenus;
exports.MobileMenusSchema = mongoose_1.SchemaFactory.createForClass(MobileMenus);
let Reviews = class Reviews {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Reviews.prototype, "avatar", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Reviews.prototype, "author", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Reviews.prototype, "rating", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Reviews.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Reviews.prototype, "text", void 0);
Reviews = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Reviews);
exports.Reviews = Reviews;
exports.ReviewsSchema = mongoose_1.SchemaFactory.createForClass(Reviews);
class DBProductFeature {
}
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBProductFeature.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], DBProductFeature.prototype, "value", void 0);
exports.DBProductFeature = DBProductFeature;
let Specifications = class Specifications {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Specifications.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Specifications.prototype, "features", void 0);
Specifications = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Specifications);
exports.Specifications = Specifications;
exports.SpecificationsSchema = mongoose_1.SchemaFactory.createForClass(Specifications);
//# sourceMappingURL=admin-collection.schema.js.map