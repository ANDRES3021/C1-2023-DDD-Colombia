import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";

/**
 * Clase abstracta que representa un publicador de eventos para cuando se actualiza la descripción de un nuevo artículo.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class UpdateDescriptionNewItemEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class UpdateDescriptionNewItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-new-item', JSON.stringify(this.response));
    }
}