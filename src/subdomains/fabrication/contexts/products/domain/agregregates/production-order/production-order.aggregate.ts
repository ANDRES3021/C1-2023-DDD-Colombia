import { IItemDomainEntity } from "../../entities/interfaces/item.domain-entity.interface";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";
import { IItemDomainService } from "../../services/item.domain-service";
import { IproductionOrderDomainService } from "../../services/production-order.domain-service";

export class ProductionOrderAgregate implements IproductionOrderDomainService, IItemDomainService {
    updateProductionOrderDetail(ProductionOrderId: string, data: { name?: string | undefined; price?: number | undefined; state?: boolean | undefined; }): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    registerNewItem(itemId: string): Promise<IItemDomainEntity> {
        throw new Error("Method not implemented.");
    }
    updateNewItemDetail(itemId: string, description?: string | undefined, price?: number | undefined): Promise<IItemDomainEntity> {
        throw new Error("Method not implemented.");
    }
    getItem(itemId: string): Promise<IItemDomainEntity> {
        throw new Error("Method not implemented.");
    }
    getProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    registerProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    
    updatePriceProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    updatecancelProduccionOrder(ProductionOrderId: string, cancel?: boolean | undefined): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    private readonly productionOrderService: IproductionOrderDomainService;
    private readonly itemService: IItemDomainService;
}