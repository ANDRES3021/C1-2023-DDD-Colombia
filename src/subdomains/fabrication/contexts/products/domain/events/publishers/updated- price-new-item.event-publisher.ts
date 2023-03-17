import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";

/**
 * Clase abstracta que define un publicador de eventos 
 * para la actualización de precios de un elemento de producto.
 *
 * @export
 * @abstract
 * @class UpdatePriceNewItemEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class UpdatePriceNewItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-new-item', JSON.stringify(this.response));
    }
}