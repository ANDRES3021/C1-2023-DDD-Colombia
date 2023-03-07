import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base";
import { ItemDomainEntity } from "../../entities/item.domain-entity";

export abstract class RegisteredNewItemEventPublisher<Response = ItemDomainEntity> extends EventPublisherBase<Response> {
    publish<Result = any>(): Promise<Result> {
        return this.emit('products.registered-new-item', JSON.stringify(this.response));
    }
}