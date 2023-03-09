import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { UpdatePriceProductionOrderEventPublisher } from "../../../../../events/publishers/update-price-production-order.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export /**
 * helper para actualizar el precio de una orden de produccion
 *
 * @param {string} ProductionOrderId id de la orden de produccion
 * @param {number} price precio de la orden de produccion
 * @param {UpdatePriceProductionOrderEventPublisher<ProductionOrderDomainEntity>} updateproductionprice evento de actualizacion de precio de orden de produccion
 * @param {(IproductionOrderDomainService | undefined)} updatePriceService servicio de actualizacion de precio de orden de produccion
 * @return {Promise<ProductionOrderDomainEntity>} promesa de orden de produccion actualizada
 */
const UpdatePiceProductionOrderHelper = async (
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