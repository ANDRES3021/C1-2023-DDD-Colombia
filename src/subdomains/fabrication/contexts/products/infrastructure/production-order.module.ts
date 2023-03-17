import { ObjectValueExceptionFilter } from './persistence/utils/exception-filters/object-value.exception-filter';
import { Module } from "@nestjs/common";
import { ProductionOrderController } from "./controllers/production-order.controller";
import { MessagingModule } from "./messaging/messaging.module";
import { PersistenceModule } from "./persistence/persistence.module";
import { ItemService } from "./persistence/services/item.service";
import { ProductionOrderService } from "./persistence/services/production-order.service";
import { APP_FILTER } from '@nestjs/core';
import { ItemController } from './controllers/item.controller';

@Module(
    { 
        imports: [PersistenceModule, MessagingModule],
        controllers: [ProductionOrderController, ItemController],
        providers: [
            {
                provide: APP_FILTER,
                useClass: ObjectValueExceptionFilter,
            }
            ],
        exports: []
    }
)
export class ProductionOrderModule {} 