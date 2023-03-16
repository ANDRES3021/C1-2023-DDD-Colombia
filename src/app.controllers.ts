import { ProductionOrderPostgresEntity } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/entities/production-order.entity';
import { Controller, Get, Post } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ProductionOrderDomainEntity } from './subdomains/fabrication/contexts/products/domain/entities/production-order.domain-entity';
import { ProductionOrderPostgresService } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/services/production-order.service';

@Controller('production-order')

export class AppController {
    
    constructor(private readonly configService: ConfigService,
        private readonly productionOrderPostgresService: ProductionOrderPostgresService
        ) {}

    @Post('crear-orden-produccion')
    createProductionOrder(){
        const item =
        new ProductionOrderPostgresEntity(
            {productionOrderId: '9f5f761a-3202-4ca4-b53a-2d6cde94e88e',
            name : 'Orden de produccion 1',
            price: 1000,
            referenceNumber: 123456,
            state : true,
            cancel : false,
            
            

        
        }
        );
        return this.productionOrderPostgresService.registerProductionOrder(item);
    }
}
