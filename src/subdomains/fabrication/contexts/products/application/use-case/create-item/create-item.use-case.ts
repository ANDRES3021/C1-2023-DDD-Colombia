import { ItemDomainEntity } from './../../../domain/entities/item.domain-entity';
import { ValueObjectException } from 'src/shared/sofka';
import { IUseCase } from 'src/shared/sofka';
import { ValueObjectErrorHandler } from 'src/shared/sofka';
import { IcreateItemResponse } from '../../../domain/interfaces/responses/create-item.response';
import { IcreateItemCommand } from '../../../domain/interfaces/commands/create-item.command';
import { IItemDomainService } from '../../../domain/services/item.domain-service';
import { RegisteredNewItemEventPublisher } from '../../../domain/events/publishers/registered-new-item.event-publisher';
import { ProductionOrderAgregate } from '../../../domain/agregregates/production-order/production-order.aggregate';
import { ItemIdValueObject } from '../../../domain/value-objects/item/item-id/item-id.value-object';
import { NameItemValueObject } from '../../../domain/value-objects/item/name/name.value-object';
import { DescriptionItemValueObject } from '../../../domain/value-objects/item/description/description.value-object';
import { PriceValueObject } from '../../../domain/value-objects/item/price/price.value-object';

/**
 *
 *
 * @export
 * @class CreateItemUseCase 
 * @extends {ValueObjectErrorHandler} extiende la clase ValueObjectErrorHandler
 * @implements {IUseCase<IcreateItemCommand, IcreateItemResponse>} implementa la interfaz IUseCase
 */ 
export class CreateItemUseCase 
extends ValueObjectErrorHandler
implements IUseCase<IcreateItemCommand, IcreateItemResponse> {
    productionOrderAgregate: ProductionOrderAgregate;
    constructor (
        private readonly itemService: IItemDomainService,
        private readonly registerNewItemEventPublisher: RegisteredNewItemEventPublisher
        ) {
        super();
        this.productionOrderAgregate = new ProductionOrderAgregate(
            {
                itemService,
                registerNewItemEventPublisher
            }
        );
    }
    /**
     *
     *
     * @param {IcreateItemCommand} command
     * @return  {Promise<IcreateItemResponse>} retorna una promesa de tipo IcreateItemResponse
     * @memberof CreateItemUseCase el comando se ejecuta y se crea un nuevo item
     */
    async execute(command: IcreateItemCommand): Promise<IcreateItemResponse> {
        const itemid = new ItemIdValueObject(command.itemid);
        const name = new NameItemValueObject(command.name);
        const description = new DescriptionItemValueObject(command.description);
        const price = new PriceValueObject(command.price);
        
        if(itemid.hasErrors()=== true) {
            this.setErrors(itemid.getErrors());
        }
        if(name.hasErrors()=== true) {
            this.setErrors(name.getErrors());
        }
        if(description.hasErrors()=== true) {
            this.setErrors(description.getErrors());
        }
        if(price.hasErrors()=== true) {
            this.setErrors(price.getErrors());
        }
        if(this.hasErrors()=== true) {
            throw new ValueObjectException('Error al crear el Item',this.getErrors());
        }
        const item = new ItemDomainEntity(
            {
                itemId: itemid.valueOf(),
                name: name.valueOf(),
                description: description.valueOf(),
                price: price.valueOf()
            });
        const resp =await this.productionOrderAgregate.registerNewItem(
            item)
        return {
            succes : true,
            data: resp
        };
}}