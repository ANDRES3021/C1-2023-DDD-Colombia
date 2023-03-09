import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

/**
 * Clase abstracta que 
 * representa un publicador de eventos cuando un item ha sido recibido.
 * 
 *
 * @export
 * @abstract
 * @class UpdatedNameOrderProductionEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdatedNameOrderProductionEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-name-order-production', JSON.stringify(this.response));
    }
}