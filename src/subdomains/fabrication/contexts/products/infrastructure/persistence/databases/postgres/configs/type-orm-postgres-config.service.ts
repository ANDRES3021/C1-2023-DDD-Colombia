import { ItemPostgresEntity } from './../entities/item.entity';
import { ConfigService } from '@nestjs/config';
import { Injectable } from "@nestjs/common";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ProductionOrderPostgresEntity } from '../entities/production-order.entity';

@Injectable()
export class TypeOrmPostgresConfigService implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) {}
    createTypeOrmOptions(): TypeOrmModuleOptions {
        console.log(this.configService.get<string>('DB_PASSWORD'))
        return {
        type: 'postgres',
        host: this.configService.get<string>('DB_HOST'),
        port: this.configService.get<number>('DB_PORT'),
        username: this.configService.get<string>('DB_USER'),
        password: this.configService.get<string>('DB_PASSWORD') ,
        database: this.configService.get<string>('DB_NAME'),
        entities: [ProductionOrderPostgresEntity, ItemPostgresEntity],
        synchronize: true,
    };
    }
    
}