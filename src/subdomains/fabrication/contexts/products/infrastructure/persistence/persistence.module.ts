import { PostgreSQLModule } from './databases/postgres/postgresql.module';
import { ItemService } from './services/item.service';
import { ProductionOrderService } from './services/production-order.service';
import { Module } from "@nestjs/common";

@Module(
    {
        imports: [PostgreSQLModule],
        controllers: [],
        providers: [
            ProductionOrderService,
            ItemService
        ],
        exports: [
            ProductionOrderService,
            ItemService
        ]
    }
)
export class PersistenceModule {}