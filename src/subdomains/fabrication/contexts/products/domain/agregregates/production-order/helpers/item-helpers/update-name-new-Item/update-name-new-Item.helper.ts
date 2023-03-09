import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdateNameNewItemEventPublisher } from "../../../../../events/publishers/updated- name-new-item.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export /**
 * helper para actualizar el nombre de un item
 *
 * @param {string} itemId id del item
 * @param {string} name nombre del item
 * @param {UpdateNameNewItemEventPublisher<ItemDomainEntity>} updatenamenewitem evento de actualizacion de nombre de item
 * @param {(IItemDomainService | undefined)} updateNameNewItemService servicio de actualizacion de nombre de item
 * @return {Promise<ItemDomainEntity>} promesa de item actualizado
 */
const UpdateNameNewItemHelper = async (
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