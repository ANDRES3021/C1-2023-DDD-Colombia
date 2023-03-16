import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
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
    providers: [RegisterProductionOrderPublisher],
    exports: [RegisterProductionOrderPublisher]
})
export class MessagingModule {}