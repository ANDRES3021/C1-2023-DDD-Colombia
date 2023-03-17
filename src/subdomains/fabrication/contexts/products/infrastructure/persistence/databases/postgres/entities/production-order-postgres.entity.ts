import { ProductionOrderDomainEntity } from '../../../../../domain/entities/production-order.domain-entity';
import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { ItemPostgresEntity } from "./item-postgres.entity";

@Index('production_order_pkey', ['productionId'], { unique: true })
@Entity('production_order', { schema: 'public' })
export class ProductionOrderPostgresEntity extends ProductionOrderDomainEntity {
  @Column('uuid', { 
    primary: true, 
    name:'production_id', 
    default: () => 'uuid_generate_v4()'
  })
  productionId: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })  
  date?: Date;

  @Column({ type: 'varchar', length: 50 })
  name?: string;

  @Column({ type: 'integer' })
  price?: number;

  @Column({ type: 'integer' })  
  referenceNumber?: number;

  @Column({ type: 'boolean', default: () => 'true'})
  state?: boolean;

  @Column({ type: 'boolean', default: () => 'false'})
  cancel?: boolean;

  

@ManyToMany(() => ItemPostgresEntity, (item) => item.itemId, { cascade: ['insert'] })
@JoinTable({
  name: 'production_order_item',
  joinColumn: {
    name: 'production_id',
    referencedColumnName: 'productionId',
  },
  inverseJoinColumn: {
    name: 'item_id',
    referencedColumnName: 'itemId',
  },
})
items: ItemPostgresEntity[];
}


