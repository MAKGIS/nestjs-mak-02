import { Document } from 'mongoose';
export declare type AddressesDocument = Addresses & Document;
export declare class DBAddress {
    default?: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    postcode: string;
    address?: string;
}
export declare class Addresses {
    default?: boolean;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    postcode: string;
    address?: string;
}
export declare const AddressesSchema: import("mongoose").Schema<any>;
export declare type OrderDitailsDocument = OrderDitails & Document;
export declare class DBAdditionalLines {
    label: string;
    total: number;
}
export declare class DBOptions {
    label: string;
    value: string;
}
export declare class DBOrderItems {
    id: number;
    slug: string;
    name: string;
    image: string;
    options?: DBOptions[];
    price: number;
    quantity: number;
    total: number;
}
export declare class OrderDitails {
    id: number;
    date: string;
    status: string;
    items: DBOrderItems[];
    phone: string;
    country: string;
    city: string;
    postcode: string;
    address: string;
    additionalLines: DBAdditionalLines[];
    quantity: number;
    subtotal: number;
    total: number;
    paymentMethod: string;
    shippingAddress: DBAddress;
    billingAddress: DBAddress;
}
export declare const OrderDitailsSchema: import("mongoose").Schema<any>;
export declare type OrdersDocument = Orders & Document;
export declare class Orders {
    id: number;
    date: string;
    status: string;
    total: number;
    quantity: number;
}
export declare const OrdersSchema: import("mongoose").Schema<any>;
export declare type PostsDocument = Posts & Document;
export declare class Posts {
    title: string;
    image: string;
    categories: string[];
    date: string;
}
export declare const PostsSchema: import("mongoose").Schema<any>;
export declare class DBPostComment {
    author: string;
    avatar?: string;
    date: string;
    text: string;
    postTitle?: string;
    children?: DBPostComment[];
}
export declare type PostCommentsDocument = PostComments & Document;
export declare class PostComments {
    count: number;
    items: DBPostComment[];
}
export declare const PostCommentsSchema: import("mongoose").Schema<any>;
export declare type LatestCommentsDocument = LatestComments & Document;
export declare class LatestComments {
    author: string;
    avatar?: string;
    date: string;
    text: string;
    postTitle?: string;
    children?: DBPostComment[];
}
export declare const LatestCommentsSchema: import("mongoose").Schema<any>;
export declare class DBLink {
    label: string;
    url: string;
    items?: DBLink[];
    external?: boolean;
    target?: string;
}
export declare class DBMegamenuColumn {
    size?: number;
    items?: DBLink[];
}
export declare class DBMegamenu {
    type: string;
    size: string;
    image?: string;
    columns?: DBMegamenuColumn[];
    items?: DBLink[];
}
export declare type NavigationLinksDocument = NavigationLinks & Document;
export declare class NavigationLinks {
    label: string;
    url: string;
    menu?: DBMegamenu[];
}
export declare const NavigationLinksSchema: import("mongoose").Schema<any>;
export declare type NavigationsDocument = Navigations & Document;
export declare class Navigations {
    label: string;
    url: string;
    menu?: DBMegamenu[];
}
export declare const NavigationsSchema: import("mongoose").Schema<any>;
export declare type MobileMenusDocument = MobileMenus & Document;
export declare class MobileMenus {
    type?: string;
    url?: string;
    label: string;
    data?: string;
    children?: MobileMenus[];
}
export declare const MobileMenusSchema: import("mongoose").Schema<any>;
export declare type ReviewsDocument = Reviews & Document;
export declare class Reviews {
    avatar: string;
    author: string;
    rating: number;
    date: string;
    text: string;
}
export declare const ReviewsSchema: import("mongoose").Schema<any>;
export declare type SpecificationsDocument = Specifications & Document;
export declare class DBProductFeature {
    name: string;
    value: string;
}
export declare class Specifications {
    name: string;
    features: DBProductFeature[];
}
export declare const SpecificationsSchema: import("mongoose").Schema<any>;
