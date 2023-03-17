import { ProductionOrderService } from './../../services/production-order.service';
import { ItemPostgresService } from './services/item-postgres.service';
import { ItemPostgresRepository } from './repositories/item.repository';
import { ProductionOrderPostgresService } from './services/production-order-postgres.service';
import { ProductionOrderRepository } from './repositories/porduction-order.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { ProductionOrderPostgresEntity } from './entities/production-order-postgres.entity';
import { AppController } from 'src/app.controllers';
import { ItemPostgresEntity } from './entities/item-postgres.entity';
import { ItemController } from 'src/item.controllers';
import { ProductionOrderController } from '../../../controllers/production-order.controller';
import { RegisterProductionOrderPublisher } from '../../../messaging/publisher/registered-production-order.publisher';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ObjectValueExceptionFilter } from '../../utils/exception-filters/object-value.exception-filter';
import { APP_FILTER } from '@nestjs/core';
import { MessagingModule } from '../../../messaging/messaging.module';


@Module({
  imports: [
    //   ClientsModule.register([
    //     {
    //         name: 'REGISTERED_PRODUCTION_ORDER_CONTEXT',
    //         transport: Transport.KAFKA,
    //         options: {
    //             client: {
    //                 clientId: 'registered-production-order-context',
    //                 brokers: ['localhost:9092'],
    //             },
    //         },
    //     },
    // ]),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([ProductionOrderPostgresEntity, ItemPostgresEntity]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    ProductionOrderRepository,
    ProductionOrderPostgresService,
    ItemPostgresRepository,
    ItemPostgresService,
    
  ],
  exports: [
    ProductionOrderPostgresService,
    ProductionOrderRepository,
    ItemPostgresRepository,
    ItemPostgresService,
    
  ]
})
export class PostgreSQLModule { }
