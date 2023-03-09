import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";

/**
 * Clase abstracta que define un editor 
 * de eventos para la actualización del nombre de un producto.
 *
 * @export
 * @abstract
 * @class UpdateNameNewItemEventPublisher
 * @extends {EventPublisherBase<Response>}
 * @template Response
 */
export abstract class UpdateNameNewItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-new-item', JSON.stringify(this.response));
    }
}