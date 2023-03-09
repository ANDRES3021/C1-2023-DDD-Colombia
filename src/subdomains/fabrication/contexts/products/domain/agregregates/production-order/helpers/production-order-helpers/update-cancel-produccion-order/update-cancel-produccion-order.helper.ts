import { ProductionOrderDomainEntity } from './../../../../../entities/production-order.domain-entity';
import { AggregateRootException } from "src/shared/sofka";
import { IproductionOrderDomainService } from '../../../../../services/production-order.domain-service';
import { UpdateCancelProduccionOrderEventPublisher } from '../../../../../events/publishers/update-cancelled-production-order.event-publisher ';

export /**
 * helper para actualizar el estado de cancelacion de una orden de produccion
 *
 * @param {string} ProductionOrderId id de la orden de produccion
 * @param {boolean} cancel estado de cancelacion
 * @param {UpdateCancelProduccionOrderEventPublisher<ProductionOrderDomainEntity>} updateproductioncancel evento de actualizacion de cancelacion de orden de produccion
 * @param {(IproductionOrderDomainService | undefined)} updateCancelService servicio de actualizacion de cancelacion de orden de produccion
 * @return {Promise<ProductionOrderDomainEntity>} promesa de orden de produccion actualizada
 */
const UpdateCancelProductionOrderHelper = async (
    ProductionOrderId: string, 
    cancel: boolean,
    updateproductioncancel : UpdateCancelProduccionOrderEventPublisher<ProductionOrderDomainEntity>,
    updateCancelService: IproductionOrderDomainService | undefined,
    
): Promise<ProductionOrderDomainEntity> => {
    if (!updateCancelService) {
        throw new AggregateRootException('updateCanelService is not defined');
    }
    if (!updateproductioncancel) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updateproductioncancel.response = await updateCancelService.updatecancelProduccionOrder(ProductionOrderId, cancel);
    updateproductioncancel.publish();
    return updateproductioncancel.response;
}