import { Column, Entity, Index } from "typeorm";

@Index('production_order_pkey', ['productionId'], { unique: true })

@Entity('production_order')
export class ProductionOrderEntity {
  @Column('uuid', { 
    primary: true, 
    name:'product_order_id', 
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
  ReferenceNumber?: number;

  @Column({ type: 'boolean', default: () => 'true'})
  state?: boolean;

  @Column({ type: 'boolean', default: () => 'false'})
  cancel?: boolean;
}