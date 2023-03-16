import { IEventPublisher } from './../../../../../../../shared/sofka/interface/event-publisher.interface';
import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { RegisterProductionOrderEventPublisher } from "../../../domain/events/publishers/registered-production-order.event-publisher";
import { lastValueFrom } from 'rxjs';
import { ProductionOrderEntity } from '../../persistence/entities/production-order.entity';

@Injectable()
export class RegisterProductionOrderPublisher extends RegisterProductionOrderEventPublisher<ProductionOrderEntity> {
    constructor(
        @Inject('REGISTERED_PRODUCTION_ORDER_CONTEXT') private readonly proxy: ClientProxy) {
        super(proxy as unknown as IEventPublisher);
    }
    emit<Result = any, Input = ProductionOrderEntity>(
        pattern: any, 
        data: Input
        ): Promise<Result> {
        return lastValueFrom(this.proxy.emit(pattern, data));
         
    }
}