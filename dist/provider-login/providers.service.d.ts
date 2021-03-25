import { Model } from 'mongoose';
import { ProviderLoginDto, UpdateProviderLoginDto } from './dto/providers.dto';
import { Provider, ProviderDocument } from './schemas/providers.schema';
export declare class ProvidersService {
    private providerModel;
    private providers;
    constructor(providerModel: Model<ProviderDocument>);
    getAll(): Promise<Provider[]>;
    getGyId(id: string): Promise<Provider>;
    create(providerLoginDto: ProviderLoginDto): Promise<Provider>;
    remove(id: string): Promise<Provider>;
    update(id: string, updateProviderLoginDto: UpdateProviderLoginDto): Promise<Provider>;
}
