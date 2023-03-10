import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";

export interface IGetProductionOrderResponse {
    data: ProductionOrderDomainEntity | null;
}