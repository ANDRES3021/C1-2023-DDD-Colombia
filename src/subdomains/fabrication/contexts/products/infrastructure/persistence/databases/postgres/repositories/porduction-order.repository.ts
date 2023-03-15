import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductionOrderEntity } from '../entities/production-order.entity';
import { IBase } from './Interfaces/base-interface';
export class ProductionOrderRepository implements IBase<ProductionOrderEntity> {
    constructor(
        @InjectRepository(ProductionOrderEntity)
        private readonly productionOrderRepository: Repository<ProductionOrderEntity>,
    ) {}
    create(entity: ProductionOrderEntity): Promise<ProductionOrderEntity> {
        return this.productionOrderRepository.save(entity);
    }
    async update(id: string, entity: ProductionOrderEntity): Promise<ProductionOrderEntity> {
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
   async findOneByUsuarioId(id: string): Promise<ProductionOrderEntity> {
        const data = await this.productionOrderRepository.findOneBy({ productionId: id });
        if (data) {
            return data;
        }   
        throw new Error('Entity not found');
    }
    findAll(): Promise<ProductionOrderEntity[]> {
        return this.productionOrderRepository.find();
    }
}