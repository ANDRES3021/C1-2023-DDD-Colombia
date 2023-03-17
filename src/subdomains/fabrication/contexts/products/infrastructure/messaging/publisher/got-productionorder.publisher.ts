import { lastValueFrom } from 'rxjs';
import { Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { IEventPublisher } from "@sofka";
import { EventPublisherBase } from "src/shared/sofka/bases/event-publisher.base"
import { GotProductionOrderEventPublisher } from "../../../domain/events/publishers/got-productionorder.event-publisher"
import { ProductionOrderEntity } from "../../persistence/entities/production-order.entity"

/**
 *
 *
 * @export
 * @class GetProductionOrderPublisher
 * @extends {GotProductionOrderEventPublisher<ProductionOrderEntity>} extiende la clase "GotProductionOrderEventPublisher"
 */
export class GetProductionOrderPublisher extends GotProductionOrderEventPublisher<ProductionOrderEntity> {
    constructor(
        @Inject('REGISTERED_PRODUCTION_ORDER_CONTEXT') private readonly proxy: ClientProxy
    ) {
       
        super(proxy as unknown as IEventPublisher);
    }
    emit<Result = any, Input = ProductionOrderEntity>(
        pattern: any, 
        data: Input): Promise<Result> {
            return lastValueFrom(this.proxy.emit(pattern, data));
    }
}