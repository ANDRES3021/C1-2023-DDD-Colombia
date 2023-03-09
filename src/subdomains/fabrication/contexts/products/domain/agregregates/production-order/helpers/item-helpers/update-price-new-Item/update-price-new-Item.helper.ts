import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdatePriceProductionOrderEventPublisher } from "../../../../../events/publishers/update-price-production-order.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export const UpdatePriceNewItemHelper = async (
    itemId: string,
    price: number,
    updatepricenewitem: UpdatePriceProductionOrderEventPublisher<ItemDomainEntity>,
    updatePriceNewItemService: IItemDomainService | undefined,
): Promise<ItemDomainEntity> => {
    if (!updatePriceNewItemService) {
        throw new AggregateRootException('updatePriceNewItemService is not defined');
    }
    if (!updatepricenewitem) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    updatepricenewitem.response = await updatePriceNewItemService.updatePriceNewItem(
        itemId,
        price);
    updatepricenewitem.publish();
    return updatepricenewitem.response;
}