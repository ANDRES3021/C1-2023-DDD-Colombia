import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { ItemIdValueObject } from './subdomains/fabrication/contexts/products/domain/value-objects/item/item-id/item-id.value-object';
import { NameItemValueObject } from './subdomains/fabrication/contexts/products/domain/value-objects/item/name/name.value-object';
import { PostgreSQLModule } from './subdomains/fabrication/contexts/products/infrastructure/persistence/databases/postgres/postgresql.module';
import { ProductionOrderModule } from './subdomains/fabrication/contexts/products/infrastructure/production-order.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(process.cwd(), 'environments', `.env.${process.env.SCOPE}`),
    }),
    ProductionOrderModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
