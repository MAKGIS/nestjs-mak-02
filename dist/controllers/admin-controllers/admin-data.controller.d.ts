import { Addresses } from './../../load-database/schemas/admin-collection.schema';
import { AdminDataService } from './admin-data.service';
export declare class AdminDataController {
    private readonly adminDataService;
    constructor(adminDataService: AdminDataService);
    getAddresses(): Promise<Addresses[]>;
}
