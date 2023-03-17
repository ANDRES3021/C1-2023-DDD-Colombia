import { ItemEntity } from './../../persistence/entities/item.entity';
import { GotItemEventPublisher } from "../../../domain/events/publishers/got-item.event-publisher";
import { ClientProxy } from '@nestjs/microservices';
import { IEventPublisher } from '@sofka';
import { lastValueFrom } from 'rxjs';
import { Inject } from '@nestjs/common';
import { RegisteredNewItemEventPublisher } from '../../../domain/events/publishers/registered-new-item.event-publisher';

/**
 *
 *
 * @export
 * @class RegisterItemPublisher
 * @extends {RegisteredNewItemEventPublisher<ItemEntity>} extiende la clase "RegisteredNewItemEventPublisher"
 */
/**
 *
 *
 * @export
 * @class RegisterItemPublisher
 * @extends {RegisteredNewItemEventPublisher<ItemEntity>} extiende la clase "RegisteredNewItemEventPublisher"
 */
export class RegisterItemPublisher extends RegisteredNewItemEventPublisher<ItemEntity> {
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