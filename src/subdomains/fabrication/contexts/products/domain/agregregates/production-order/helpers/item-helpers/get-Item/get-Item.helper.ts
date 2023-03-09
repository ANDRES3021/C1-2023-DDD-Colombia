import { ItemDomainEntity } from './../../../../../entities/item.domain-entity';
import { AggregateRootException } from "src/shared/sofka";
import { ProductionOrderDomainEntity } from "../../../../../entities/production-order.domain-entity";
import { GotItemEventPublisher } from "../../../../../events/publishers/got-item.event-publisher";
import { IproductionOrderDomainService } from "../../../../../services/production-order.domain-service";
import { IItemDomainService } from '../../../../../services/item.domain-service';

export const GetItemHelper = async (
    ProductionOrderId: string,
    getitem: GotItemEventPublisher<ItemDomainEntity>,
    getItemService: IItemDomainService  | undefined,
): Promise<ItemDomainEntity> => {
    if (!getItemService) {
        throw new AggregateRootException('getItemService is not defined');
    }
    if (!getitem) {
        throw new AggregateRootException('productionOrderService is not defined');
    }
    getitem.response = await getItemService.getItem(ProductionOrderId);
    getitem.publish();
    return getitem.response;
}