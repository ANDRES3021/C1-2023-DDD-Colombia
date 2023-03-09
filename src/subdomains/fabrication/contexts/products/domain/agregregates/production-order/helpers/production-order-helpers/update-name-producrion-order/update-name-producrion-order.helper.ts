import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { UpdatedNameOrderProductionEventPublisher } from "../../../../../events/publishers/updated-name-order-production.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export const UpdateNameProductionOrderHelper = async (
    ProductionOrderId: string,
    name: string,
    updateproductionname: UpdatedNameOrderProductionEventPublisher<ProductionOrderDomainEntity>,
    updateNameService: IproductionOrderDomainService | undefined,
): Promise<ProductionOrderDomainEntity> => {
    if (!updateNameService) {
        throw new AggregateRootException('updateNameService is not defined');
    }
    if (!updateproductionname) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updateproductionname.response = await updateNameService.updateNameProductionOrder(ProductionOrderId, name);
    updateproductionname.publish();
    return updateproductionname.response;
}