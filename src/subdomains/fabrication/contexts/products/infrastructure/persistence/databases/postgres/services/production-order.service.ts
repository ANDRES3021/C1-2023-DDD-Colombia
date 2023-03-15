import { Entity } from 'typeorm';
import { ProductionOrderRepository } from './../repositories/porduction-order.repository';
import { Injectable } from "@nestjs/common";
import { IproductionOrderDomainService } from 'src/subdomains/fabrication/contexts/products/domain/services/production-order.domain-service';
import { ProductionOrderDomainEntity } from 'src/subdomains/fabrication/contexts/products/domain/entities/production-order.domain-entity';
import { ProductionOrderEntity } from '../entities/production-order.entity';

@Injectable()
export class ProductionOrderService implements IproductionOrderDomainService {
  constructor(private readonly productionOrderRepository: ProductionOrderRepository) {}
    getProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        return this.productionOrderRepository.findOneByUsuarioId(ProductionOrderId);
    }
    registerProductionOrder(entity: ProductionOrderDomainEntity): Promise<ProductionOrderDomainEntity> {
        const data = new ProductionOrderEntity(
            
        );
        data.productionId = entity.productionOrderId?.valueOf()?? '';
        data.name = entity.name?.valueOf()?? '';
        data.price = entity.price?.valueOf()?? 0;
        data.ReferenceNumber = entity.referenceNumber?.valueOf()?? 0;
        data.state = entity.state?.valueOf()?? false;
        data.cancel = entity.cancel?.valueOf()?? false;


        return this.productionOrderRepository.create(data);
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