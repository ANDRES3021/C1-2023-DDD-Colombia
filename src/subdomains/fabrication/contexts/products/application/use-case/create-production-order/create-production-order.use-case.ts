import { PriceValueObject } from '../../../domain/value-objects/item/price/price.value-object';
import { DescriptionItemValueObject } from '../../../domain/value-objects/item/description/description.value-object';
import { ItemIdValueObject } from '../../../domain/value-objects/item/item-id/item-id.value-object';
import { DateValueObject } from '../../../domain/value-objects/production-order/date/date.value-object';
import { ProductionOrderIdValueObject } from '../../../domain/value-objects/production-order/prodution-order-id/production-order-id.value-object';

import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/shared/sofka";
import { ProductionOrderAgregate } from '../../../domain/agregregates/production-order/production-order.aggregate';
import { RegisterProductionOrderEventPublisher } from '../../../domain/events/publishers/registered-production-order.event-publisher';
import { IcreateProductionOrderUseCase } from '../../../domain/interfaces/commands/create-production-order.command';
import { IcreateProductionOrderResponse } from '../../../domain/interfaces/responses/created-production-order.response';
import { IproductionOrderDomainService } from '../../../domain/services/production-order.domain-service';
import { NameProductionOrderValueObject } from '../../../domain/value-objects/production-order/name/name.value-object';
import { PriceProductionOrderValueObject } from '../../../domain/value-objects/production-order/price/price-production-order-value-object';
import { ReferenceNumberValueObject } from '../../../domain/value-objects/production-order/reference-number/reference-number.value-object';
import { StateValueObject } from '../../../domain/value-objects/production-order/state/state.value-object';
import { CancelValueObject } from '../../../domain/value-objects/production-order/cancel/cancel.value-object';
import { ProductionOrderDomainEntity } from '../../../domain/entities/production-order.domain-entity';
import { NameItemValueObject } from '../../../domain/value-objects/item/name/name.value-object';

/**
 *
 *
 * @export
 * @class CreateProductionOrderUseCase
 * @extends {ValueObjectErrorHandler} extiende la clase ValueObjectErrorHandler para poder manejar los errores de los value objects
 * @implements {IUseCase<IcreateProductionOrderUseCase, IcreateProductionOrderResponse>} implementa la interfaz IUseCase
 */
export class CreateProductionOrderUseCase 
extends ValueObjectErrorHandler
implements IUseCase<IcreateProductionOrderUseCase, IcreateProductionOrderResponse> {
    productionOrderAgregate: ProductionOrderAgregate;
    /**
     * Creates an instance of CreateProductionOrderUseCase.
     * @param {IproductionOrderDomainService} productionOrderService 
     * @param {RegisterProductionOrderEventPublisher} registerProductionOrderEventPublisher
     * @memberof CreateProductionOrderUseCase
     */
    constructor(
        private readonly productionOrderService: IproductionOrderDomainService, 
        private readonly registerProductionOrderEventPublisher: RegisterProductionOrderEventPublisher
        ) {
        super();
        this.productionOrderAgregate = new ProductionOrderAgregate(
            {
                productionOrderService,
                registerProductionOrderEventPublisher
            }
        );
    }

    async execute(command: IcreateProductionOrderUseCase): Promise<IcreateProductionOrderResponse> {
        const productionOrderId = new ProductionOrderIdValueObject(command.productionOrderId);
        const date = new DateValueObject(command.date);
        const name = new NameProductionOrderValueObject(command.name);
        const price = new PriceProductionOrderValueObject(command.price);
        const referenceNumber = new ReferenceNumberValueObject(command.referencenumber);
        const state = new StateValueObject(command.state);
        const cancel = new CancelValueObject(command.cancel);
        const intems: {
            itemid: ItemIdValueObject;
            name: NameItemValueObject;
            description: DescriptionItemValueObject;
            price: PriceValueObject;
        }[] = [];
        command.itemids.forEach((item) => {
            intems.push({
                itemid: new ItemIdValueObject(item.itemid),
                name: new NameItemValueObject(item.name),
                description: new DescriptionItemValueObject(item.description),
                price: new PriceValueObject(item.price)
            });
        });
    intems.forEach((item) => {
        if (item.itemid.hasErrors() === true) {
            this.setErrors(item.itemid.getErrors());
        }
        if (item.name.hasErrors() === true) {
            this.setErrors(item.name.getErrors());
        }
        if (item.description.hasErrors() === true) {
            this.setErrors(item.description.getErrors());
        }
        if (item.price.hasErrors() === true) {
            this.setErrors(item.price.getErrors());
        }
    });


        if (productionOrderId.hasErrors() === true) {
            this.setErrors(productionOrderId.getErrors());
        }
        if (date.hasErrors() === true) {
            this.setErrors(date.getErrors());           
        }
        if (name.hasErrors() === true) {
            this.setErrors(name.getErrors());           
        }
        if (price.hasErrors() === true) {
            this.setErrors(price.getErrors());           
        }
        if (referenceNumber.hasErrors() === true) {
            this.setErrors(referenceNumber.getErrors());           
        }
        if (state.hasErrors() === true) {
            this.setErrors(state.getErrors());           
        }
        if (cancel.hasErrors() === true) {
            this.setErrors(cancel.getErrors());           
        }
        if (this.hasErrors()===true) {
            throw new ValueObjectException('Error al crear la orden de produccion', this.getErrors());
        }
       
        const resp = await this.productionOrderAgregate.registerProductionOrder(
                {
                    productionOrderId,
                    date,
                    name,
                    price,
                    referenceNumber,
                    state,
                    cancel,
                    itemids: intems
                    
                }
        )
        return {
            succes: true,
            data: resp
        };
         
    }
    
}