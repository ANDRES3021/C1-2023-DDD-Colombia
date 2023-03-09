import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdateNameNewItemEventPublisher } from "../../../../../events/publishers/updated- name-new-item.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export const UpdateNameNewItemHelper = async (
    itemId: string,
    name: string,
    updatenamenewitem: UpdateNameNewItemEventPublisher<ItemDomainEntity>,
    updateNameNewItemService: IItemDomainService | undefined,
): Promise<ItemDomainEntity> => {
    if (!updateNameNewItemService) {
        throw new AggregateRootException('updateNameNewItemService is not defined');
    }
    if (!updatenamenewitem) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updatenamenewitem.response = await updateNameNewItemService.updateNameNewItem(
        itemId,
        name);
    updatenamenewitem.publish();
    return updatenamenewitem.response;
}