import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { RegisteredNewItemEventPublisher } from "../../../../../events/publishers/registered-new-item.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export const RegisterNewItemHelper = async (
    itemId: string, 
    name: string, 
    description: string, 
    price: number,
    registernewitem: RegisteredNewItemEventPublisher<ItemDomainEntity>,
    registerNewItemService: IItemDomainService | undefined,
): Promise<ItemDomainEntity> => {
    if (!registerNewItemService) {
        throw new AggregateRootException('registerNewItemService is not defined');
    }
    if (!registernewitem) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    registernewitem.response = await registerNewItemService.registerNewItem(
        itemId, 
        name, 
        description, 
        price);
    registernewitem.publish();
    return registernewitem.response;
}