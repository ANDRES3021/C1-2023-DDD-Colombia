import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { UpdatedStateOrderProductionEventPublisher } from "../../../../../events/publishers/updated-state-order-production.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export /**
 * helper para actualizar el estado de una orden de produccion
 *
 * @param {string} ProductionOrderId id de la orden de produccion
 * @param {boolean} state estado de la orden de produccion
 * @param {UpdatedStateOrderProductionEventPublisher<ProductionOrderDomainEntity>} updateproductionstate evento de actualizacion de estado de orden de produccion
 * @param {(IproductionOrderDomainService | undefined)} updateStateService servicio de actualizacion de estado de orden de produccion
 * @return  {Promise<ProductionOrderDomainEntity>} promesa de orden de produccion actualizada
 */
const UpdateStateProductionOrderHelper = async (
    ProductionOrderId: string,
    state: boolean,
    updateproductionstate: UpdatedStateOrderProductionEventPublisher<ProductionOrderDomainEntity>,
    updateStateService: IproductionOrderDomainService | undefined,
): Promise<ProductionOrderDomainEntity> => {
    if (!updateStateService) {
        throw new AggregateRootException('updateStateService is not defined');
    }
    if (!updateproductionstate) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updateproductionstate.response = await updateStateService.updatestateProduccionOrder(ProductionOrderId, state);
    updateproductionstate.publish();
    return updateproductionstate.response;
}