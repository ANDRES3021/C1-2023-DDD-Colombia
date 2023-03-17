import { ItemDomainEntity } from '../../../../../domain/entities/item.domain-entity';
import { Column, Entity, Index, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { ProductionOrderPostgresEntity } from "./production-order-postgres.entity";

@Index('item_pkey', ['itemId'], { unique: true })
@Entity('item', { schema: 'public' })
export class ItemPostgresEntity extends ItemDomainEntity{
    @Column('uuid', { 
        primary: true,
        name:'item_id',
        default: () => 'uuid_generate_v4()'
    })
    itemId: string;

    @Column({ type: 'varchar', length: 50 })
    name?: string;

    @Column({ type: 'varchar', length: 100 })
    description?: string;

    @Column({ type: 'integer' })
    price?: number;

@ManyToMany(() => ProductionOrderPostgresEntity, (productionOrder) => productionOrder.productionId)
@JoinTable({
  name: 'production_order_item',
  joinColumn: {
    name: 'item_id',
    referencedColumnName: 'itemId',
  },
  inverseJoinColumn: {
    name: 'production_id',
    referencedColumnName: 'productionId',
  },
})
productionOrders: ProductionOrderPostgresEntity[];
}