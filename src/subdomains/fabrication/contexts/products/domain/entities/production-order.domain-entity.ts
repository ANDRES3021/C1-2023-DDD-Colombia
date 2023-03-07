import { Interface } from 'readline';
import { NameItemValueObject } from '../value-objects/item/name/name.value-object';
import { PriceValueObject } from '../value-objects/item/price/price.value-object';
import { CancelValueObject } from '../value-objects/production-order/cancel/cancel.value-object';
import { DateValueObject } from '../value-objects/production-order/date/date.value-object';
import { ProductionOrderIdValueObject } from '../value-objects/production-order/prodution-order-id/production-order-id.value-object';
import { ReferenceNumberValueObject } from '../value-objects/production-order/reference-number/reference-number.value-object';
import { StateValueObject } from '../value-objects/production-order/state/state.value-object';
import { IItemDomainEntity } from './interfaces/item.domain-entity.interface';
import { IproductionOrdenDomainEntity } from './interfaces/production-order.domain-entity.interface';
/**
 * clase que representa la entidad orden de procuccion 
 *
 * @export
 * @class ProductOrderDomainEntity
 * @implements {IproductionOrdenDomainEntity}
 */
export class ProductOrderDomainEntity implements IproductionOrdenDomainEntity{
    productionOrderId?: string | ProductionOrderIdValueObject ;
    itemids: IItemDomainEntity[];
    date?: Date | DateValueObject ;
    name?: string | NameItemValueObject ;
    price?: number | PriceValueObject ;
    ReferenceNumber?: number | ReferenceNumberValueObject;
    state?: boolean | StateValueObject ;
    cancel?: boolean | CancelValueObject;
    constructor(data?: IproductionOrdenDomainEntity) {
        if(data?.productionOrderId) this.productionOrderId = data.productionOrderId;
        if(data?.date) this.date = data.date;
        if(data?.name) this.name = data.name;
        if(data?.price) this.price = data.price;
        if(data?.ReferenceNumber) this.ReferenceNumber = data.ReferenceNumber;
        if(data?.state) this.state = data.state;
        if(data?.cancel) this.cancel = data.cancel;
    }
}