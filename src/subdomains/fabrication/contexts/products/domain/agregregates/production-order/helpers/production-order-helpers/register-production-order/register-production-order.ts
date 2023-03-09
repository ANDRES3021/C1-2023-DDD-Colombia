import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { GotProductionOrderEventPublisher } from "../../../../../events/publishers/got-productionorder.event-publisher";
import { RegisterProductionOrderEventPublisher } from "../../../../../events/publishers/registered-production-order.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export const RegisterProductionOrderHelper = async (
    ProductionOrderId: string, 
    date: Date, name: string, 
    price: number, 
    referencenumber: number, 
    state: boolean, 
    cancel: boolean,
    registerProduction : RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>,
    productionService : IproductionOrderDomainService | undefined,
 ): Promise<ProductionOrderDomainEntity> => {
    if (!registerProduction) {
        throw new AggregateRootException('registerProductionOrderEventPublisher is not defined');
    }
    if (!productionService) {
        throw new AggregateRootException('registerOrderService is not defined');
    }
    registerProduction.response = await productionService.registerProductionOrder(ProductionOrderId, date, name, price, referencenumber, state, cancel);
    registerProduction.publish();
    return registerProduction.response;
 }   