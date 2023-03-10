import { NameItemValueObject } from "../../value-objects/item/name/name.value-object";
import { PriceProductionOrderValueObject } from "../../value-objects/production-order/price/price-production-order-value-object";
import { CancelValueObject } from "../../value-objects/production-order/cancel/cancel.value-object";
import { DateValueObject } from "../../value-objects/production-order/date/date.value-object";
import { ProductionOrderIdValueObject } from "../../value-objects/production-order/prodution-order-id/production-order-id.value-object";
import { ReferenceNumberValueObject } from "../../value-objects/production-order/reference-number/reference-number.value-object";
import { StateValueObject } from "../../value-objects/production-order/state/state.value-object";
import { IItemDomainEntity } from "./item.domain-entity.interface";

/**
 * Interfaz que define las propiedades de una entidad de dominio de ítems.
 *
 * @export
 * @interface IproductionOrdenDomainEntity 
 */
export interface IproductionOrdenDomainEntity {
    productionOrderId? : string | ProductionOrderIdValueObject
    itemids?: IItemDomainEntity[];
    date? : Date | DateValueObject;
    name? : string | NameItemValueObject;
    price? : number | PriceProductionOrderValueObject;
    referenceNumber? : number | ReferenceNumberValueObject;
    state? : boolean | StateValueObject;
    cancel? : boolean | CancelValueObject;
}