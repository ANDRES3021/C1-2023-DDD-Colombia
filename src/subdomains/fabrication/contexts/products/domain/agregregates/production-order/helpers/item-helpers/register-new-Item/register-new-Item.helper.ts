import { ItemDomainEntity } from './../../../../../entities/item.domain-entity';
import { AggregateRootException } from "src/shared/sofka";
import { RegisteredNewItemEventPublisher } from "../../../../../events/publishers/registered-new-item.event-publisher";
import { IItemDomainService } from "../../../../../services/item.domain-service";

export /**
 * helper para registrar un nuevo item
 *
 * @param {string} itemId id del item
 * @param {string} name nombre del item
 * @param {string} description descripcion del item
 * @param {number} price precio del item
 * @param {RegisteredNewItemEventPublisher<ItemDomainEntity>} registernewitem evento de registro de nuevo item
 * @param {(IItemDomainService | undefined)} registerNewItemService servicio de registro de nuevo item
 * @return {Promise<ItemDomainEntity>} promesa de item registrado
 */
const RegisterNewItemHelper = async (
    itemDomainEntity: ItemDomainEntity,
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
        itemDomainEntity
        );
    registernewitem.publish();
    return registernewitem.response;
}