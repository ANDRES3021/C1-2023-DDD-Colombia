import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RegisteredNewItemEventPublisher } from '../../domain/events/publishers/registered-new-item.event-publisher';
import { GetItemPublisher } from './publisher/got-item.publisher';
import { GetProductionOrderPublisher } from './publisher/got-productionorder.publisher';
import { RegisterItemPublisher } from './publisher/registered-new-item.publisher';
import { RegisterProductionOrderPublisher } from './publisher/registered-production-order.publisher';
@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'REGISTERED_PRODUCTION_ORDER_CONTEXT',
                transport: Transport.KAFKA,
                options: {
                    client: {
                        brokers: ['localhost:9092'],
                    },
                },
            },
        ]),



    ],
    controllers: [],
    providers: [RegisterProductionOrderPublisher, GetProductionOrderPublisher, RegisterItemPublisher, GetItemPublisher],
    exports: [RegisterProductionOrderPublisher, GetProductionOrderPublisher, RegisterItemPublisher, GetItemPublisher]
})
export class MessagingModule {}