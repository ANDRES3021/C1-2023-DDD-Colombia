import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from 'src/shared/sofka';
import { ProductionOrderAgregate } from '../../../domain/agregregates/production-order/production-order.aggregate';
import { GotItemEventPublisher } from '../../../domain/events/publishers/got-item.event-publisher';
import { IGetItemCommand } from '../../../domain/interfaces/commands/get-item.command';
import { IGetItemResponse } from '../../../domain/interfaces/responses/get-item.response';
import { IItemDomainService } from '../../../domain/services/item.domain-service';
import { ItemIdValueObject } from '../../../domain/value-objects/item/item-id/item-id.value-object';
export class GetItemUseCase 
extends ValueObjectErrorHandler
implements IUseCase<IGetItemCommand, IGetItemResponse >{
    productionOrderAgregate: ProductionOrderAgregate;
    constructor(
        private readonly itemService: IItemDomainService,
        private readonly gotItemEventPublisher: GotItemEventPublisher

    ) {
        super();
        this.productionOrderAgregate = new ProductionOrderAgregate(
            {
                itemService,
                gotItemEventPublisher
            }
        );
    }
    async execute(command: IGetItemCommand): Promise<IGetItemResponse> {
        const itemid = new ItemIdValueObject(command.itemId);
        if(itemid.hasErrors()=== true) {
            this.setErrors(itemid.getErrors());
        }
        if(this.hasErrors()=== true) {
            throw new ValueObjectException('Error al crear el Item',this.getErrors());
        }
        const data = await this.productionOrderAgregate.getItem(itemid.value);
        return {data};
    }

}