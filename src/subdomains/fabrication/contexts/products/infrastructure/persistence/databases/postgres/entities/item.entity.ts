import { ItemDomainEntity } from './../../../../../domain/entities/item.domain-entity';
import { Column, Entity, Index, ManyToMany } from "typeorm";
import { ProductionOrderPostgresEntity } from "./production-order.entity";

@Index('item_pkey', ['ItemId'], { unique: true })

@Entity('item')
export class ItemPostgresEntity extends ItemDomainEntity{
    @Column('uuid', { 
        primary: true, 
        name:'item_id', 
        default: () => 'uuid_generate_v4()'
        })
    ItemId: string;
    @Column({ type: 'varchar', length: 50 })
    name?: string;
   @Column({ type: 'varchar', length: 100 })
    description?: string;
    @Column({ type: 'integer' })
    price?: number;

    @ManyToMany(() => ProductionOrderPostgresEntity, productionOrder => productionOrder.items)

    productionOrder: ProductionOrderPostgresEntity[];
}