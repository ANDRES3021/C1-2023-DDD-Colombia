import { DescriptionItemValueObject } from '../value-objects/item/description/description.value-object';
import { ItemIdValueObject } from '../value-objects/item/item-id/item-id.value-object';
import { NameItemValueObject } from '../value-objects/item/name/name.value-object';
import { PriceValueObject } from '../value-objects/item/price/price.value-object';
import { IItemDomainEntity } from './interfaces/item.domain-entity.interface';
import { IproductionOrdenDomainEntity } from './interfaces/production-order.domain-entity.interface';
/**
 * clase que representa ta entidad item 
 *
 * @export
 * @class ItemDomainEntity
 * @implements {IItemDomainEntity}
 */
export class ItemDomainEntity implements IItemDomainEntity{
    itemId?: string | ItemIdValueObject;
    name?: string | NameItemValueObject;
    description?: string | DescriptionItemValueObject;
    price?: number | PriceValueObject;
    productionOrders: IproductionOrdenDomainEntity[];
    constructor(data?: IItemDomainEntity) {
        if(data?.itemId) this.itemId = data.itemId;
        if(data?.name) this.name = data.name;
        if(data?.description) this.description = data.description;
        if(data?.price) this.price = data.price;
    }
}