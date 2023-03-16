import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductionOrderPostgresEntity } from '../entities/production-order-postgres.entity';
import { IBase } from './Interfaces/base-interface';
export class ProductionOrderRepository implements IBase<ProductionOrderPostgresEntity> {
    constructor(
        @InjectRepository(ProductionOrderPostgresEntity)
        private readonly productionOrderRepository: Repository<ProductionOrderPostgresEntity>,
    ) {}

    create(entity: ProductionOrderPostgresEntity): Promise<ProductionOrderPostgresEntity> {
        return this.productionOrderRepository.save(entity);
    }

    async update(id: string, entity: ProductionOrderPostgresEntity): Promise<ProductionOrderPostgresEntity> {
        const data = await this.productionOrderRepository.findOneBy({productionId: id});
        if (data) {
            const newEntity = {
                ...data,
                ...entity,
                productionId : id
            };
            return this.productionOrderRepository.save(newEntity);
        }
        throw new Error('Entity not found');
    }

    async delete(id: string): Promise<boolean> {
        const data = await this.productionOrderRepository.findOneBy({ productionId: id });
        if (data) {
            
            await this.productionOrderRepository.remove(data);
            return true;
        }
        throw new Error('Entity not found');
    }

   async findOneByUsuarioId(id: string): Promise<ProductionOrderPostgresEntity> {
        const data = await this.productionOrderRepository.findOneBy({ productionId: id });
        if (data) {
            return data;
        }   
        throw new Error('Entity not found');
    }

    findAll(): Promise<ProductionOrderPostgresEntity[]> {
        return this.productionOrderRepository.find();
    }
}