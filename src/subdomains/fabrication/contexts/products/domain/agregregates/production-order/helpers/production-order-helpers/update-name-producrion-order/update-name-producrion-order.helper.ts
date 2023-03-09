import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { UpdatedNameOrderProductionEventPublisher } from "../../../../../events/publishers/updated-name-order-production.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export /**
 * helper para actualizar el nombre de una orden de produccion
 *
 * @param {string} ProductionOrderId id de la orden de produccion
 * @param {string} name nombre de la orden de produccion
 * @param {UpdatedNameOrderProductionEventPublisher<ProductionOrderDomainEntity>} updateproductionname evento de actualizacion de nombre de orden de produccion
 * @param {(IproductionOrderDomainService | undefined)} updateNameService servicio de actualizacion de nombre de orden de produccion
 * @return {Promise<ProductionOrderDomainEntity>} promesa de orden de produccion actualizada
 */
const UpdateNameProductionOrderHelper = async (
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