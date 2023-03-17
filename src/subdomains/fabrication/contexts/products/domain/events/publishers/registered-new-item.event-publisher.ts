import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";

/**
 * Clase abstracta que representa un publicador de eventos para cuando se registra un nuevo ítem.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class RegisteredNewItemEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class RegisteredNewItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.registered-new-item', JSON.stringify(this.response));
    }
}