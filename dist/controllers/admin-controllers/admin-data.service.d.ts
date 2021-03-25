import { Model } from 'mongoose';
import { Addresses, AddressesDocument } from './../../load-database/schemas/admin-collection.schema';
export declare class AdminDataService {
    private modelAddresses;
    private users;
    constructor(modelAddresses: Model<AddressesDocument>);
    getAddresses(): Promise<Addresses[]>;
}
