import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProductionOrderDomainEntity } from '../../entities/production-order.domain-entity';
/**
 * Clase abstracta que representa un publicador de eventos para cuando se actualiza o cancela una orden de producción.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class UpdateCancelProduccionOrderEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class UpdateCancelProduccionOrderEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.update-cancel-production-order', JSON.stringify(this.response));
    }
}