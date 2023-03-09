import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { GotProductionOrderEventPublisher } from "../../../../../events/publishers/got-productionorder.event-publisher";
import { RegisterProductionOrderEventPublisher } from "../../../../../events/publishers/registered-production-order.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";

export /**
 * helper para registrar una orden de produccion
 *
 * @param {string} ProductionOrderId id de la orden de produccion
 * @param {Date} date fecha de la orden de produccion
 * @param {string} name nombre de la orden de produccion
 * @param {number} price precio de la orden de produccion
 * @param {number} referencenumber numero de referencia de la orden de produccion
 * @param {boolean} state estado de la orden de produccion
 * @param {boolean} cancel cancelacion de la orden de produccion
 * @param {RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>} registerProduction evento de registro de orden de produccion
 * @param {(IproductionOrderDomainService | undefined)} productionService servicio de registro de orden de produccion
 * @return {Promise<ProductionOrderDomainEntity>} promesa de orden de produccion registrada
 */
const RegisterProductionOrderHelper = async (
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