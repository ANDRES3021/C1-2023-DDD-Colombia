import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdateDescriptionNewItemEventPublisher } from "../../../../../events/publishers/updated- description-new-item.event-publishe";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export const UpdateDescriptionNewItemHelper = async (
    itemId: string,
    description: string,
    updatedescriptionnewitem: UpdateDescriptionNewItemEventPublisher<ItemDomainEntity>,
    updateDescriptionNewItemService: IItemDomainService | undefined,
): Promise<ItemDomainEntity> => {
    if (!updateDescriptionNewItemService) {
        throw new AggregateRootException('updateDescriptionNewItemService is not defined');
    }
    if (!updatedescriptionnewitem) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updatedescriptionnewitem.response = await updateDescriptionNewItemService.updateDescriptionNewItem(
        itemId,
        description);
    updatedescriptionnewitem.publish();
    return updatedescriptionnewitem.response;
}