import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

/**
 * Clase abstracta 
 * que publica eventos cuando se actualiza el estado de una orden de producción.
 * 
 *
 * @export
 * @abstract
 * @class UpdatedStateOrderProductionEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedStateOrderProductionEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-state-order-production', JSON.stringify(this.response));
    }
}