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
exports.CellCollectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cell_collection_schema_1 = require("./schemas/cell-collection.schema");
const admin_collection_schema_1 = require("./schemas/admin-collection.schema");
let CellCollectionService = class CellCollectionService {
    constructor(modelCellCollection, modelBrands, modelShopCategories, modelBlogCategories, modelProducts, modelAttributes, modelAddresses, modelOrderDitails, modelOrders, modelPosts, modelPostComments, modelLatestComments, modelNavigationLinks, modelNavigations, modelMobileMenus, modelReviews, modelSpecifications) {
        this.modelCellCollection = modelCellCollection;
        this.modelBrands = modelBrands;
        this.modelShopCategories = modelShopCategories;
        this.modelBlogCategories = modelBlogCategories;
        this.modelProducts = modelProducts;
        this.modelAttributes = modelAttributes;
        this.modelAddresses = modelAddresses;
        this.modelOrderDitails = modelOrderDitails;
        this.modelOrders = modelOrders;
        this.modelPosts = modelPosts;
        this.modelPostComments = modelPostComments;
        this.modelLatestComments = modelLatestComments;
        this.modelNavigationLinks = modelNavigationLinks;
        this.modelNavigations = modelNavigations;
        this.modelMobileMenus = modelMobileMenus;
        this.modelReviews = modelReviews;
        this.modelSpecifications = modelSpecifications;
        this.response_Test = [];
        this.isFullObject = false;
    }
    setResponse(doc) {
        if (this.isFullObject) {
            return this.response_Test.push(doc);
        }
        else {
            return this.response_Test.push(doc._id);
        }
    }
    errorResponse(text = "", error) {
        console.log(`Error ${text} error -> %O`, error);
        return {
            statusCode: 500,
            message: error.message
        };
    }
    getModelCollection(collectionName) {
        let newItem = null;
        switch (collectionName) {
            case "brands":
                newItem = this.modelBrands;
                break;
            case "shopcategories":
                newItem = this.modelShopCategories;
                break;
            case "blogcategories":
                newItem = this.modelBlogCategories;
                break;
            case "products":
                newItem = this.modelProducts;
                break;
            case "attributes":
                newItem = this.modelAttributes;
                break;
            case "addresses":
                newItem = this.modelAddresses;
                break;
            case "orderditails":
                newItem = this.modelOrderDitails;
                break;
            case "orders":
                newItem = this.modelOrders;
                break;
            case "posts":
                newItem = this.modelPosts;
                break;
            case "postcomments":
                newItem = this.modelPostComments;
                break;
            case "latestcomments":
                newItem = this.modelLatestComments;
                break;
            case "departments":
                newItem = this.modelNavigationLinks;
                break;
            case "navigations":
                newItem = this.modelNavigations;
                break;
            case "mobilemenus":
                newItem = this.modelMobileMenus;
                break;
            case "reviews":
                newItem = this.modelReviews;
                break;
            case "specifications":
                newItem = this.modelSpecifications;
                break;
            default:
                newItem = this.modelCellCollection;
                break;
        }
        return newItem;
    }
    getModelCollectionItem(collectionName, item) {
        let newItem = null;
        switch (collectionName) {
            case "brands":
                newItem = new this.modelBrands(item);
                break;
            case "shopcategories":
                newItem = new this.modelShopCategories(item);
                break;
            case "blogcategories":
                newItem = new this.modelBlogCategories(item);
                break;
            case "products":
                newItem = new this.modelProducts(item);
                break;
            case "attributes":
                newItem = new this.modelAttributes(item);
                break;
            case "addresses":
                newItem = new this.modelAddresses(item);
                break;
            case "orderditails":
                newItem = new this.modelOrderDitails(item);
                break;
            case "orders":
                newItem = new this.modelOrders(item);
                break;
            case "posts":
                newItem = new this.modelPosts(item);
                break;
            case "postcomments":
                newItem = new this.modelPostComments(item);
                break;
            case "latestcomments":
                newItem = new this.modelLatestComments(item);
                break;
            case "departments":
                newItem = new this.modelNavigationLinks(item);
                break;
            case "navigations":
                newItem = new this.modelNavigations(item);
                break;
            case "mobilemenus":
                newItem = new this.modelMobileMenus(item);
                break;
            case "reviews":
                newItem = new this.modelReviews(item);
                break;
            case "specifications":
                newItem = new this.modelSpecifications(item);
                break;
            default:
                newItem = new this.modelCellCollection(item);
                break;
        }
        return newItem;
    }
    async getAll(collectionName) {
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        return newItem.find().exec();
    }
    async getById(collectionName, id, fieldName) {
        console.log(`collection -> ${collectionName}  id -> %O`, id);
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        switch (fieldName) {
            case "_id":
                return newItem.findById(id);
                break;
            case "id":
                return newItem.findOne({ id: id }).exec();
                break;
            default:
                return newItem.findById(id);
                break;
        }
    }
    async getByIdMany(collectionName, body) {
        if (Array.isArray(body)) {
            console.log(`get Many collection -> ${collectionName}`);
            try {
                let requests = body.map(async (item) => {
                    if (item._id !== undefined) {
                        return this.getById(collectionName, item._id, "_id");
                    }
                    if (item.id !== undefined) {
                        return this.getById(collectionName, item.id, "id");
                    }
                });
                let responses = await Promise.all(requests);
                console.log(`get Many responses -> %O`, responses);
                return responses;
            }
            catch (error) {
                return error;
            }
            console.log('End sync get !!');
        }
        else {
            console.log(`get One collection -> ${collectionName}`);
            if (body._id !== undefined) {
                return this.getById(collectionName, body._id, "_id");
            }
            if (body.id !== undefined) {
                return this.getById(collectionName, body.id, "id");
            }
        }
    }
    async getByPage(collectionName, body) {
        console.log(`getByPage() collection -> ${collectionName}  body -> %O`, body);
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        if (body) {
            const items = newItem.find()
                .skip(body.perPage * body.page)
                .limit(body.perPage);
            console.log(`getByPage() items -> %O`, items);
            return items;
        }
        return [];
    }
    async getByPageMain(collectionName, body) {
        console.log(`get Page Main -> ${collectionName}`);
        try {
            if (body !== undefined) {
                return this.getByPage(collectionName, body);
            }
            return { body: 'Error: body empty' };
        }
        catch (error) {
            console.log(`getByPage error -> %O`, error);
            return error;
        }
        console.log('End sync get !!');
    }
    async getAllCount(collectionName, body) {
        console.log(`getAllCount() collection -> ${collectionName}  body -> %O`, body);
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        if (body) {
            const items = newItem.count(body);
            console.log(`getAllCount()  items -> %O`, items);
            return items;
        }
        return [];
    }
    async getCountMain(collectionName, body) {
        console.log(`getCountMain() collection -> ${collectionName}`);
        try {
            if (body !== undefined) {
                return this.getAllCount(collectionName, body);
            }
            return { body: 'Error: body empty' };
        }
        catch (error) {
            console.log(`getCountMain() error -> %O`, error);
            return error;
        }
        console.log('End sync get !!');
    }
    async save(collectionName, item) {
        let newItem = null;
        newItem = this.getModelCollectionItem(collectionName, item);
        return newItem.save().then(savedDoc => {
            if (savedDoc === newItem) {
                this.setResponse(savedDoc);
            }
            return savedDoc;
        });
    }
    async create(collectionName, body) {
        this.response_Test = [];
        try {
            if (Array.isArray(body)) {
                console.log(`create Many collection -> ${collectionName}`);
                let requests = body.map(async (item) => {
                    return this.save(collectionName, item);
                });
                let responses = await Promise.all(requests);
                console.log(`create Many responses.length -> %O`, responses.length);
                console.log(`create Many responses -> %O`, this.response_Test);
                return this.response_Test;
            }
            else {
                console.log(`create One collection -> ${collectionName}`);
                let responses = await this.save(collectionName, body);
                console.log(`create One responses -> %O`, this.response_Test);
                return this.response_Test;
            }
        }
        catch (error) {
            return this.errorResponse(" create One(Many) ", error);
        }
    }
    async remove(collectionName, id) {
        console.log(`delete collection -> ${collectionName}  id -> %O`, id);
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        return newItem.findByIdAndRemove(id).then(savedDoc => {
            this.setResponse(savedDoc);
            return savedDoc;
        });
    }
    async removeOne(collectionName, id) {
        this.response_Test = [];
        try {
            console.log(`delete One 1 collection -> ${collectionName}`);
            let responses = await this.remove(collectionName, id);
            console.log(`delete One response_Test -> %O`, this.response_Test);
            return this.response_Test;
        }
        catch (error) {
            return this.errorResponse(" delete One ", error);
        }
    }
    async removeMany(collectionName, body) {
        this.response_Test = [];
        try {
            if (Array.isArray(body)) {
                console.log(`delete Many collection -> ${collectionName}`);
                let requests = body.map(async (item) => {
                    return this.remove(collectionName, item._id);
                });
                let responses = await Promise.all(requests);
                console.log(`delete Many responses length -> %O`, responses.length);
                console.log(`delete Many response_Test -> %O`, this.response_Test);
                return this.response_Test;
            }
            else {
                console.log(`delete One collection -> ${collectionName}`);
                let responses = await this.remove(collectionName, body._id);
                console.log(`delete One response_Test -> %O`, this.response_Test);
                return this.response_Test;
            }
        }
        catch (error) {
            return this.errorResponse(" delete One(Many) ", error);
        }
    }
    async removeAll(collectionName) {
        console.log(`delete All collection -> ${collectionName}`);
        let newItem = null;
        newItem = this.getModelCollection(collectionName);
        return newItem.deleteMany({});
    }
    async updateItem(collectionName, item) {
        let newItem;
        newItem = this.getModelCollectionItem(collectionName, item);
        return this.modelBrands.findByIdAndUpdate(newItem._id, newItem, { new: true }).exec().then(savedDoc => {
            this.setResponse(savedDoc);
            return savedDoc;
        });
    }
    async updateItemAsync(collectionName, item) {
        let itemUpdate = this.updateItem(collectionName, item);
        return itemUpdate;
    }
    async update(collectionName, updateBody) {
        this.response_Test = [];
        if (Array.isArray(updateBody)) {
            console.log(`update Many collection -> ${collectionName}`);
            try {
                let requests = updateBody.map(async (item) => {
                    return this.updateItemAsync(collectionName, item);
                });
                let responses = await Promise.all(requests);
                console.log(`create Many responses.length -> %O`, responses.length);
                console.log(`create Many responses -> %O`, this.response_Test);
                return this.response_Test;
            }
            catch (error) {
                return error;
            }
            console.log('End async update !!');
        }
        else {
            console.log(`update One collection -> ${collectionName}`);
            let responses = await this.updateItemAsync(collectionName, updateBody);
            console.log(`create Many responses -> %O`, this.response_Test);
            return this.response_Test;
        }
    }
};
CellCollectionService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(cell_collection_schema_1.CellCollection.name)),
    __param(1, mongoose_1.InjectModel(cell_collection_schema_1.Brands.name)),
    __param(2, mongoose_1.InjectModel(cell_collection_schema_1.ShopCategories.name)),
    __param(3, mongoose_1.InjectModel(cell_collection_schema_1.BlogCategories.name)),
    __param(4, mongoose_1.InjectModel(cell_collection_schema_1.Products.name)),
    __param(5, mongoose_1.InjectModel(cell_collection_schema_1.Attributes.name)),
    __param(6, mongoose_1.InjectModel(admin_collection_schema_1.Addresses.name)),
    __param(7, mongoose_1.InjectModel(admin_collection_schema_1.OrderDitails.name)),
    __param(8, mongoose_1.InjectModel(admin_collection_schema_1.Orders.name)),
    __param(9, mongoose_1.InjectModel(admin_collection_schema_1.Posts.name)),
    __param(10, mongoose_1.InjectModel(admin_collection_schema_1.PostComments.name)),
    __param(11, mongoose_1.InjectModel(admin_collection_schema_1.LatestComments.name)),
    __param(12, mongoose_1.InjectModel(admin_collection_schema_1.NavigationLinks.name)),
    __param(13, mongoose_1.InjectModel(admin_collection_schema_1.Navigations.name)),
    __param(14, mongoose_1.InjectModel(admin_collection_schema_1.MobileMenus.name)),
    __param(15, mongoose_1.InjectModel(admin_collection_schema_1.Reviews.name)),
    __param(16, mongoose_1.InjectModel(admin_collection_schema_1.Specifications.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CellCollectionService);
exports.CellCollectionService = CellCollectionService;
//# sourceMappingURL=cell-collection.service.js.map