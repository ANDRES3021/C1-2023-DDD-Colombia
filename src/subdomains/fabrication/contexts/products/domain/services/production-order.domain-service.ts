import { ProductionOrderDomainEntity } from './../entities/production-order.domain-entity';
/**
 * esta es una interface que contiene todas las acciones de mi orden de produccion
 *
 * @export
 * @interface IproductionOrderDomainService
 * @template Entity
 */
export interface IproductionOrderDomainService<Entity extends ProductionOrderDomainEntity = ProductionOrderDomainEntity> {
    getProductionOrder(ProductionOrderId: string): Promise<Entity>;
    registerProductionOrder(ProductionOrderId: string): Promise<Entity>;
    updateProductionOrderDetail(ProductionOrderId: string, data: { name?: string, price?: number, state?: boolean }): Promise<Entity>;
    updatePriceProductionOrder(ProductionOrderId: string): Promise<Entity>;
    updatecancelProduccionOrder(ProductionOrderId: string, cancel?: boolean): Promise<Entity>;

}