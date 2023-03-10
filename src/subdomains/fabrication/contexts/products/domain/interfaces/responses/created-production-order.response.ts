import { ProductionOrderDomainEntity } from './../../entities/production-order.domain-entity';
export interface IcreateProductionOrderResponse {
    succes: boolean,
    data : ProductionOrderDomainEntity | null,
}