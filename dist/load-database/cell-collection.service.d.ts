import { Model } from 'mongoose';
import { CellCollectionDocument, BrandsDocument, ProductsDocument, AttributesDocument, ShopCategoriesDocument, BlogCategoriesDocument } from './schemas/cell-collection.schema';
import { AddressesDocument, OrderDitailsDocument, OrdersDocument, PostCommentsDocument, PostsDocument, LatestCommentsDocument, NavigationLinksDocument, NavigationsDocument, MobileMenusDocument, ReviewsDocument, SpecificationsDocument } from './schemas/admin-collection.schema';
export declare class CellCollectionService {
    private modelCellCollection;
    private modelBrands;
    private modelShopCategories;
    private modelBlogCategories;
    private modelProducts;
    private modelAttributes;
    private modelAddresses;
    private modelOrderDitails;
    private modelOrders;
    private modelPosts;
    private modelPostComments;
    private modelLatestComments;
    private modelNavigationLinks;
    private modelNavigations;
    private modelMobileMenus;
    private modelReviews;
    private modelSpecifications;
    private response_Test;
    isFullObject: boolean;
    constructor(modelCellCollection: Model<CellCollectionDocument>, modelBrands: Model<BrandsDocument>, modelShopCategories: Model<ShopCategoriesDocument>, modelBlogCategories: Model<BlogCategoriesDocument>, modelProducts: Model<ProductsDocument>, modelAttributes: Model<AttributesDocument>, modelAddresses: Model<AddressesDocument>, modelOrderDitails: Model<OrderDitailsDocument>, modelOrders: Model<OrdersDocument>, modelPosts: Model<PostsDocument>, modelPostComments: Model<PostCommentsDocument>, modelLatestComments: Model<LatestCommentsDocument>, modelNavigationLinks: Model<NavigationLinksDocument>, modelNavigations: Model<NavigationsDocument>, modelMobileMenus: Model<MobileMenusDocument>, modelReviews: Model<ReviewsDocument>, modelSpecifications: Model<SpecificationsDocument>);
    setResponse(doc: any): number;
    errorResponse(text: string, error: any): {
        statusCode: number;
        message: any;
    };
    getModelCollection(collectionName: string): any;
    getModelCollectionItem(collectionName: string, item: any): any;
    getAll(collectionName: string): Promise<any[]>;
    getById(collectionName: string, id: string, fieldName: string): Promise<any>;
    getByIdMany(collectionName: string, body: any): Promise<any>;
    getByPage(collectionName: string, body: any): Promise<any>;
    getByPageMain(collectionName: string, body: any): Promise<any>;
    getAllCount(collectionName: string, body: any): Promise<any>;
    getCountMain(collectionName: string, body: any): Promise<any>;
    save(collectionName: string, item: any): Promise<any>;
    create(collectionName: string, body: any): Promise<any>;
    remove(collectionName: string, id: string): Promise<any>;
    removeOne(collectionName: string, id: any): Promise<any | any[]>;
    removeMany(collectionName: string, body: any): Promise<any | any[]>;
    removeAll(collectionName: string): Promise<any>;
    updateItem(collectionName: string, item: any): Promise<any>;
    updateItemAsync(collectionName: any, item: any): Promise<any>;
    update(collectionName: string, updateBody: any): Promise<any>;
}
