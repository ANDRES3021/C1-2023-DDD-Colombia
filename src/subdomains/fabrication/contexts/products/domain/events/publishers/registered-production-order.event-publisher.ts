import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProductionOrderDomainEntity } from './../../entities/production-order.domain-entity';
/**
 * Clase abstracta que representa un publicador de eventos para cuando se registra una nueva orden de producción.
 * Esta clase extiende la clase "EventPublisherBase".
 * 
 *
 * @export
 * @abstract
 * @class RegisterProductionOrderEventPublisher
 * @extends {EventPublisherBase<Response>} extiende la clase "EventPublisherBase"
 * @template Response
 */
export abstract class RegisterProductionOrderEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.registered-production-order', JSON.stringify(this.response));
    }
}