import { Document } from 'mongoose';
export declare type CellCollectionDocument = CellCollection & Document;
export declare class CellCollection {
    cell: string;
}
export declare const CellCollectionSchema: import("mongoose").Schema<any>;
export declare type BrandsDocument = Brands & Document;
export declare class Brands {
    name: string;
    slug: string;
    image: string;
    created?: string;
    edited?: string;
}
export declare const BrandsSchema: import("mongoose").Schema<any>;
export declare type CategorieDocument = Categorie & Document;
export declare class Categorie {
    name: string;
    slug: string;
    image?: string;
    items?: number;
    H: any;
    children?: Categorie[];
}
export declare const CategorieSchema: import("mongoose").Schema<any>;
export declare type ShopCategoriesDocument = ShopCategories & Document;
export declare class ShopCategories {
    name: string;
    slug: string;
    image?: string;
    items?: number;
    children?: ShopCategories[];
}
export declare const ShopCategoriesSchema: import("mongoose").Schema<any>;
export declare type BlogCategoriesDocument = BlogCategories & Document;
export declare class BlogCategories {
    name: string;
    slug: string;
    image?: string;
    items?: number;
    children?: BlogCategories[];
}
export declare const BlogCategoriesSchema: import("mongoose").Schema<any>;
export declare type AttributesDocument = Attributes & Document;
export declare class AttributeValue {
    name: string;
    slug: string;
}
export declare class Attributes {
    name: string;
    slug: string;
    values: AttributeValue[];
}
export declare const AttributesSchema: import("mongoose").Schema<any>;
export declare type ProductsDocument = Products & Document;
export declare class ProductAttribute {
    slug: string;
    values: string[];
    featured?: true;
}
export declare class Products {
    name: string;
    slug: string;
    price: number;
    compareAtPrice?: number;
    images: string[];
    badges?: string[];
    rating: number;
    reviews: number;
    availability: string;
    brand?: string;
    categories: string[];
    attributes?: ProductAttribute[];
}
export declare const ProductsSchema: import("mongoose").Schema<any>;
