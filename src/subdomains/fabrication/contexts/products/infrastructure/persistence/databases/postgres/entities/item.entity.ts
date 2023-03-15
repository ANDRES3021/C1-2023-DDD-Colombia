import { Column, Entity, Index } from "typeorm";

@Index('item_pkey', ['ItemId'], { unique: true })

@Entity('item')
export class ItemPostgresEntity {
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
}