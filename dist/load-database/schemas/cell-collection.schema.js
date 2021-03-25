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
exports.ProductsSchema = exports.Products = exports.ProductAttribute = exports.AttributesSchema = exports.Attributes = exports.AttributeValue = exports.BlogCategoriesSchema = exports.BlogCategories = exports.ShopCategoriesSchema = exports.ShopCategories = exports.CategorieSchema = exports.Categorie = exports.BrandsSchema = exports.Brands = exports.CellCollectionSchema = exports.CellCollection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_def_1 = require("../../interfaces/category-def");
let CellCollection = class CellCollection {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], CellCollection.prototype, "cell", void 0);
CellCollection = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], CellCollection);
exports.CellCollection = CellCollection;
exports.CellCollectionSchema = mongoose_1.SchemaFactory.createForClass(CellCollection);
let Brands = class Brands {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Brands.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Brands.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Brands.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Brands.prototype, "created", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Brands.prototype, "edited", void 0);
Brands = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Brands);
exports.Brands = Brands;
exports.BrandsSchema = mongoose_1.SchemaFactory.createForClass(Brands);
let Categorie = class Categorie {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Categorie.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Categorie.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Categorie.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Categorie.prototype, "items", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Categorie.prototype, "children", void 0);
Categorie = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Categorie);
exports.Categorie = Categorie;
exports.CategorieSchema = mongoose_1.SchemaFactory.createForClass(Categorie);
let ShopCategories = class ShopCategories {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ShopCategories.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ShopCategories.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ShopCategories.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], ShopCategories.prototype, "items", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], ShopCategories.prototype, "children", void 0);
ShopCategories = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], ShopCategories);
exports.ShopCategories = ShopCategories;
exports.ShopCategoriesSchema = mongoose_1.SchemaFactory.createForClass(ShopCategories);
let BlogCategories = class BlogCategories {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BlogCategories.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BlogCategories.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], BlogCategories.prototype, "image", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], BlogCategories.prototype, "items", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], BlogCategories.prototype, "children", void 0);
BlogCategories = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], BlogCategories);
exports.BlogCategories = BlogCategories;
exports.BlogCategoriesSchema = mongoose_1.SchemaFactory.createForClass(BlogCategories);
let AttributeValue = class AttributeValue {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], AttributeValue.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], AttributeValue.prototype, "slug", void 0);
AttributeValue = __decorate([
    mongoose_1.Schema()
], AttributeValue);
exports.AttributeValue = AttributeValue;
let Attributes = class Attributes {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attributes.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attributes.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Attributes.prototype, "values", void 0);
Attributes = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Attributes);
exports.Attributes = Attributes;
exports.AttributesSchema = mongoose_1.SchemaFactory.createForClass(Attributes);
let ProductAttribute = class ProductAttribute {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], ProductAttribute.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], ProductAttribute.prototype, "values", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], ProductAttribute.prototype, "featured", void 0);
ProductAttribute = __decorate([
    mongoose_1.Schema()
], ProductAttribute);
exports.ProductAttribute = ProductAttribute;
let Products = class Products {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "slug", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "price", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "compareAtPrice", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Products.prototype, "images", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Products.prototype, "badges", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "rating", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Products.prototype, "reviews", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "availability", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Products.prototype, "brand", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Products.prototype, "categories", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Array)
], Products.prototype, "attributes", void 0);
Products = __decorate([
    mongoose_1.Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], Products);
exports.Products = Products;
exports.ProductsSchema = mongoose_1.SchemaFactory.createForClass(Products);
//# sourceMappingURL=cell-collection.schema.js.map