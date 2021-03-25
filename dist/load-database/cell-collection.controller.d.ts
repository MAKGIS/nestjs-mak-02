import { CellCollectionService } from './cell-collection.service';
export declare class CellCollectionController {
    private readonly cellCollectionService;
    constructor(cellCollectionService: CellCollectionService);
    getById(collectionName: string, _id: string): Promise<any>;
    getByIdMany(collectionName: string, body: any): Promise<any>;
    getUsers(collectionName: string): Promise<any[]>;
    getByPageMain(collectionName: string, body: any): Promise<any>;
    getCountMain(collectionName: string, body: any): Promise<any>;
    create(collectionName: string, body: any): Promise<any>;
    remove(collectionName: string, _id: string): Promise<any>;
    removeMany(collectionName: string, body: any): Promise<any>;
    removeAll(collectionName: string): Promise<any>;
    update(collectionName: string, updateBody: any): Promise<any | any[]>;
    createdb(collectionName: string, body: any): Promise<any>;
}
