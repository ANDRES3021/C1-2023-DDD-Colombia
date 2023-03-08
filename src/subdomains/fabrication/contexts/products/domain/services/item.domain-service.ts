import { IItemDomainEntity } from './../entities/interfaces/item.domain-entity.interface';
import { ItemDomainEntity } from "../entities/item.domain-entity";

/**
 * esta es la interface que contiene todas las acciones de la entidad Item
 *
 * @export
 * @interface IItemDomainService
 * @template entity
 */
export interface IItemDomainService<entity extends ItemDomainEntity = IItemDomainEntity>{
    registerNewItem(itemId: string, name:string, description:string, price: number): Promise<entity>;
    updateNameNewItem(itemId: string, name:string): Promise<entity>;
    updateDescriptionNewItem(itemId: string, description:string): Promise<entity>;
    updatePriceNewItem(itemId: string, price:number): Promise<entity>;
    getItem(itemId: string): Promise<entity>;
} 