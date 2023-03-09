import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

/**
 *  Clase abstracta que representa un publicador de eventos para cuando se actualiza el precio de una orden de producción.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class UpdatePriceProductionOrderEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatePriceProductionOrderEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-price-production-order', JSON.stringify(this.response));
    }
}