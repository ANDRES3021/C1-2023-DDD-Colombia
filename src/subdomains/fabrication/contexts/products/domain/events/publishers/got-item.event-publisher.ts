import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

/**
 *  Clase abstracta que representa un publicador de eventos para cuando se recibe un ítem.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class GotItemEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class GotItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.got-item', JSON.stringify(this.response));
    }
}