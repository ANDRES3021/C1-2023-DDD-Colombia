import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { UpdatePriceProductionOrderEventPublisher } from "../../../../../events/publishers/update-price-production-order.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export const UpdatePiceProductionOrderHelper = async (
    ProductionOrderId: string,
    price: number,
    updateproductionprice: UpdatePriceProductionOrderEventPublisher<ProductionOrderDomainEntity>,
    updatePriceService: IproductionOrderDomainService | undefined,
): Promise<ProductionOrderDomainEntity> => {
    if (!updatePriceService) {
        throw new AggregateRootException('updatePriceService is not defined');
    }
    if (!updateproductionprice) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updateproductionprice.response = await updatePriceService.updatePriceProductionOrder(ProductionOrderId, price);
    updateproductionprice.publish();
    return updateproductionprice.response;
}