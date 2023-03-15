import { ProductionOrderService } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/services/production-order.service';
import { ProductionOrderEntity } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/entities/production-order.entity';
import { Controller, Get, Post } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ProductionOrderDomainEntity } from './subdomains/fabrication/contexts/products/domain/entities/production-order.domain-entity';

@Controller('production-order')

export class AppController {
    
    constructor(private readonly configService: ConfigService,
        private readonly productionOrderService: ProductionOrderService
        ) {}

    @Post('crear-orden-produccion')
    createProductionOrder(){
        const item =
        new ProductionOrderDomainEntity(
            {productionOrderId: '9f5f761a-3202-4ca4-b53a-2d6cde94e88e'}
        );
        return this.productionOrderService.registerProductionOrder(item);
    }
}
