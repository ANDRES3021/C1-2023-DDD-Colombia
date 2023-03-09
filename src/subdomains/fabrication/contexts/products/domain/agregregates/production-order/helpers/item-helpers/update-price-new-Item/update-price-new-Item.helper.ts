import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdatePriceProductionOrderEventPublisher } from "../../../../../events/publishers/update-price-production-order.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export /**
 * helper para actualizar el precio de un item
 *
 * @param {string} itemId id del item
 * @param {number} price precio del item
 * @param {UpdatePriceProductionOrderEventPublisher<ItemDomainEntity>} updatepricenewitem evento de actualizacion de precio de item
 * @param {(IItemDomainService | undefined)} updatePriceNewItemService servicio de actualizacion de precio de item
 * @return {Promise<ItemDomainEntity>} promesa de item actualizado
 */ 
const UpdatePriceNewItemHelper = async (
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