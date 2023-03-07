import { ProductOrderDomainEntity } from './../entities/production-order.domain-entity';
/**
 * esta es una interface que contiene todas las acciones de mi orden de produccion
 *
 * @export
 * @interface IproductionOrderDomainService
 * @template entity
 */
export interface IproductionOrderDomainService<entity extends ProductOrderDomainEntity> {
    getProductionOrder(ProductionOrderId: string): Promise<entity>;
    registerProductionOrder(ProductionOrderId: string): Promise<entity>;
    updateProductionOrderDetail(ProductionOrderId: string, name?: string , price?: number, state?: boolean): Promise<entity>;
    updatePriceProductionOrder(ProductionOrderId: string): Promise<entity>;
    updatecancelProduccionOrder(ProductionOrderId: string, cancel?: boolean): Promise<entity>;

}