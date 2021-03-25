import { ProviderLoginDto, UpdateProviderLoginDto } from './dto/providers.dto';
import { ProvidersService } from './providers.service';
export declare class ProviderLoginController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
    getProviders(): ProvidersService;
    create(providerLoginDto: ProviderLoginDto): string;
    remove(id: string): string;
    update(updateProviderLoginDto: UpdateProviderLoginDto, id: string): string;
}
