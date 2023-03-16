import { ProductionOrderPostgresEntity } from '../entities/production-order-postgres.entity';
import { Entity } from 'typeorm';
import { ProductionOrderRepository } from '../repositories/porduction-order.repository';
import { Injectable } from "@nestjs/common";
import { IproductionOrderDomainService } from 'src/subdomains/fabrication/contexts/products/domain/services/production-order.domain-service';
import { ProductionOrderDomainEntity } from 'src/subdomains/fabrication/contexts/products/domain/entities/production-order.domain-entity';


@Injectable()
export class ProductionOrderPostgresService implements IproductionOrderDomainService {
  constructor(private readonly productionOrderRepository: ProductionOrderRepository) {}
    getProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        return this.productionOrderRepository.findOneByUsuarioId(ProductionOrderId);
    }
    registerProductionOrder(entity: ProductionOrderPostgresEntity): Promise<ProductionOrderPostgresEntity> {
        return this.productionOrderRepository.create(entity);
    }
    updateNameProductionOrder(ProductionOrderId: string, name: string): Promise<ProductionOrderDomainEntity> {
        return this.updateNameProductionOrder(ProductionOrderId, name);
    }
    updatePriceProductionOrder(ProductionOrderId: string, price: number): Promise<ProductionOrderDomainEntity> {
        return this.updatePriceProductionOrder(ProductionOrderId, price);
    }
    updatecancelProduccionOrder(ProductionOrderId: string, cancel: boolean): Promise<ProductionOrderDomainEntity> {
        return this.updatecancelProduccionOrder(ProductionOrderId, cancel);
    }
    updatestateProduccionOrder(ProductionOrderId: string, state: boolean): Promise<ProductionOrderDomainEntity> {
        return this.updatestateProduccionOrder(ProductionOrderId, state);
    }
}