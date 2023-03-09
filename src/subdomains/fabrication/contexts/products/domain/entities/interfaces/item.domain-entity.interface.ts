import { DescriptionItemValueObject } from "../../value-objects/item/description/description.value-object";
import { ItemIdValueObject } from "../../value-objects/item/item-id/item-id.value-object";
import { NameItemValueObject } from "../../value-objects/item/name/name.value-object";
import { PriceValueObject } from "../../value-objects/item/price/price.value-object";
import { IproductionOrdenDomainEntity } from "./production-order.domain-entity.interface";

/**
 * Interfaz que define las propiedades que debe tener una entidad de Item en el dominio del negocio.
 *
 * @export
 * @interface IItemDomainEntity 
 */
export interface IItemDomainEntity {
    itemId? : string | ItemIdValueObject;
    name? : string | NameItemValueObject;
    description? : string | DescriptionItemValueObject;
    price? : number | PriceValueObject;
    productionOrders: IproductionOrdenDomainEntity[];
}