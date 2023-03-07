import { EventPublisherBase } from 'src/shared/sofka/bases/event-publisher.base';
import { ProductionOrderDomainEntity } from './../../entities/production-order.domain-entity';
export abstract class RegisterProductionOrderEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.registered-production-order', JSON.stringify(this.response));
    }
}