import { Filter, SerializedFilterValues } from './filter';
import { Product } from './product';
export interface List<T> {
    items: T[];
}
export interface PaginatedList<T> extends List<T> {
    page: number;
    limit: number;
    sort: string;
    total: number;
    pages: number;
    from: number;
    to: number;
}
export interface FilterableList<T> extends List<T> {
    filters: Filter[];
    filterValues: SerializedFilterValues;
}
export declare type ProductsList = PaginatedList<Product> & FilterableList<Product>;
