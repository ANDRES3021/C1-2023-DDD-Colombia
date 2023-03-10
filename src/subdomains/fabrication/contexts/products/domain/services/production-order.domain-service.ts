import { ReferenceNumberValueObject } from './../value-objects/production-order/reference-number/reference-number.value-object';
import { ProductionOrderDomainEntity } from './../entities/production-order.domain-entity';
/**
 * esta es una interface que contiene todas las acciones de mi orden de produccion
 *
 * @export
 * @interface IproductionOrderDomainService
 * @template Entity extiende la interface IproductionOrderDomainEntity
 */
export interface IproductionOrderDomainService<Entity extends ProductionOrderDomainEntity = ProductionOrderDomainEntity> {
    getProductionOrder(ProductionOrderId: string): Promise<Entity>;
    registerProductionOrder(entity :ProductionOrderDomainEntity): Promise<Entity>;
    updateNameProductionOrder(ProductionOrderId: string, name: string): Promise<Entity>;
    updatePriceProductionOrder(ProductionOrderId: string, price: number): Promise<Entity>;
    updatecancelProduccionOrder(ProductionOrderId: string, cancel: boolean): Promise<Entity>;
    updatestateProduccionOrder(ProductionOrderId: string, state: boolean): Promise<Entity>;
}