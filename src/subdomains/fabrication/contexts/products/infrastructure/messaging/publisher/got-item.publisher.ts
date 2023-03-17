import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { IEventPublisher } from "@sofka";
import { lastValueFrom } from "rxjs";
import { GotItemEventPublisher } from "../../../domain/events/publishers/got-item.event-publisher";
import { ItemEntity } from "../../persistence/entities/item.entity";

/**
 *
 *
 * @export
 * @class GetItemPublisher 
 * @extends {GotItemEventPublisher<ItemEntity>} extiende la clase "GotItemEventPublisher"
 */
export class GetItemPublisher extends GotItemEventPublisher<ItemEntity> {
    constructor(
        @Inject('REGISTERED_PRODUCTION_ORDER_CONTEXT') private readonly proxy: ClientProxy) {
        super(proxy as unknown as IEventPublisher);
    }
    emit<Result = any, Input = ItemEntity>(
        pattern: any, 
        data: Input
        ): Promise<Result> {
        return lastValueFrom(this.proxy.emit(pattern, data));
    } 
}