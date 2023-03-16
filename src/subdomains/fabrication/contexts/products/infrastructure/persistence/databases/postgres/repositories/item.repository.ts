import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemPostgresEntity } from "../entities/item-postgres.entity";
import { IBase } from "./Interfaces/base-interface";

export class ItemPostgresRepository implements IBase<ItemPostgresEntity> {
    constructor(
        @InjectRepository(ItemPostgresEntity)
        private readonly itemRepository: Repository<ItemPostgresEntity>,
    ) {}

    create(entity: ItemPostgresEntity): Promise<ItemPostgresEntity> {
        return this.itemRepository.save(entity);
    }

    async update(id: string, entity: ItemPostgresEntity): Promise<ItemPostgresEntity> {
        const data = await this.itemRepository.findOneBy({ itemId: id });
        if (data) {
            const newEntity = {
                ...data,
                ...entity,
                itemId : id
            };
            return this.itemRepository.save(newEntity);
        }
        throw new Error('Entity not found');
    }

    async delete(id: string): Promise<boolean> {
        const data = await this.itemRepository.findOneBy({ itemId: id });
        if (data) {
                
                await this.itemRepository.remove(data);
                return true;
            }
            throw new Error('Entity not found');
    }

    async findOneByUsuarioId(id: string): Promise<ItemPostgresEntity> {
        const data = await this.itemRepository.findOneBy({ itemId: id });
        if (data) {
            return data;
        }
        throw new Error('Entity not found');
    }

    findAll(): Promise<ItemPostgresEntity[]> {
        return this.itemRepository.find();
    }
    
}