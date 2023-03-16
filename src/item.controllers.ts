import { ItemDomainEntity } from './subdomains/fabrication/contexts/products/domain/entities/item.domain-entity';
import { ItemPostgresService } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/services/item-postgres.service';
import { ConfigService } from "@nestjs/config";
import { Controller, Post } from '@nestjs/common';
import { ItemPostgresEntity } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/entities/item-postgres.entity';

@Controller('item')

export class ItemController {
    
    constructor(private readonly configService: ConfigService,
        private readonly itemPostgresService: ItemPostgresService,
        ) {}

    @Post('crear-item')
    createProductionOrder(){
        const item =
        new ItemPostgresEntity(
            {itemId: '9f5f761a-3202-4ca4-b53a-2d6cde94e88e'
            ,name: 'Item 1',
            description: 'Item 1 description',
            price: 1000
        
        }
        );
        return this.itemPostgresService.registerNewItem(item);
    }
}
