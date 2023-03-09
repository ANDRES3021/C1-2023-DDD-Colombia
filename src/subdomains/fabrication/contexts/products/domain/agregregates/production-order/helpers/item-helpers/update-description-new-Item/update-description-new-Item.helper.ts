import { AggregateRootException } from "src/shared/sofka";
import { ItemDomainEntity } from "../../../../../entities/item.domain-entity";
import { UpdateDescriptionNewItemEventPublisher } from "../../../../../events/publishers/updated- description-new-item.event-publishe";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export /**
 * helper para actualizar la descripcion de un item
 *
 * @param {string} itemId id del item
 * @param {string} description descripcion del item
 * @param {UpdateDescriptionNewItemEventPublisher<ItemDomainEntity>} updatedescriptionnewitem evento de actualizacion de descripcion de item
 * @param {(IItemDomainService | undefined)} updateDescriptionNewItemService servicio de actualizacion de descripcion de item
 * @return {Promise<ItemDomainEntity>} promesa de item actualizado
 */
const UpdateDescriptionNewItemHelper = async (
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