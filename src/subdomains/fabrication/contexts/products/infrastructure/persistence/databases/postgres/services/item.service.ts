import { Injectable } from '@nestjs/common';
import { ItemPostgresRepository } from './../repositories/item.repository';
import { ItemPostgresEntity } from './../entities/item.entity';
import { ItemDomainEntity } from './../../../../../domain/entities/item.domain-entity';
import { IItemDomainEntity } from "src/subdomains/fabrication/contexts/products/domain/entities/interfaces/item.domain-entity.interface";
import { IItemDomainService } from "src/subdomains/fabrication/contexts/products/domain/services/item.domain-service";

@Injectable()
export class ItemPostgresService implements IItemDomainService{
    constructor(private readonly itemPostgresRepository: ItemPostgresRepository) {}
    registerNewItem(entity : ItemPostgresEntity): Promise<ItemPostgresEntity> {
        return this.itemPostgresRepository.create(entity);
    }
    updateNameNewItem(itemId: string, name: string): Promise<IItemDomainEntity> {
        return this.updateNameNewItem(itemId, name);
    }
    updateDescriptionNewItem(itemId: string, description: string): Promise<IItemDomainEntity> {
        return this.updateDescriptionNewItem(itemId, description);
    }
    updatePriceNewItem(itemId: string, price: number): Promise<IItemDomainEntity> {
        return this.updatePriceNewItem(itemId, price);
    }
    getItem(itemId: string): Promise<IItemDomainEntity> {
       return this.itemPostgresRepository.findOneByUsuarioId(itemId);

    }
}