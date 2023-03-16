import { ItemPostgresService } from './services/item.service';
import { ItemPostgresRepository } from './repositories/item.repository';
import { ProductionOrderPostgresService } from './services/production-order.service';
import { ProductionOrderRepository } from './repositories/porduction-order.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { ProductionOrderPostgresEntity } from './entities/production-order.entity';
import { AppController } from 'src/app.controllers';
import { ItemPostgresEntity } from './entities/item.entity';
import { ItemController } from 'src/item.controllers';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([ProductionOrderPostgresEntity, ItemPostgresEntity]),
  ],
  controllers: [AppController, ItemController],
  providers: [TypeOrmModule, ProductionOrderRepository, ProductionOrderPostgresService, ItemPostgresRepository, ItemPostgresService],
  exports: [ProductionOrderPostgresService, ProductionOrderRepository, ItemPostgresRepository, ItemPostgresService]
})
export class PostgreSQLModule {}
