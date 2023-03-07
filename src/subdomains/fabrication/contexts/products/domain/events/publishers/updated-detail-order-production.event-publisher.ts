import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

export abstract class UpdatedDetailOrderProductionEventPublisher<Response = ProductionOrderDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.updated-detail-order-production', JSON.stringify(this.response));
    }
}