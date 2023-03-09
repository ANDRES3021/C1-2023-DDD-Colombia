import { AggregateRootException } from 'src/shared/sofka';
import { GotProductionOrderEventPublisher } from '../../../../../events/publishers/got-productionorder.event-publisher';
import { IproductionOrderDomainService } from '../../../../../services/production-order.domain-service';
import { ProductionOrderDomainEntity } from './../../../../../entities/production-order.domain-entity';
export const GetProductionOrderHelper = async (
    productionid : string,
    getProduction : GotProductionOrderEventPublisher<ProductionOrderDomainEntity>,
    productionService : IproductionOrderDomainService | undefined,
    ): Promise<ProductionOrderDomainEntity> => {
        if (!getProduction) {
            throw new AggregateRootException('gotProductionOrderEventPublisher is not defined');
        }
        if (!productionService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        getProduction.response = await productionService.getProductionOrder(productionid);
        getProduction.publish();
        return getProduction.response;
    }