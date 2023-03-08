import { AggregateRootException } from './../../../../../../../shared/sofka/exceptions/aggregate-root.exception';
import { IItemDomainEntity } from "../../entities/interfaces/item.domain-entity.interface";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";
import { UpdatePriceProductionOrderEventPublisher } from '../../events/publishers/update-price-production-order.event-publisher';
import { GotProductionOrderEventPublisher } from "../../events/publishers/got-productionorder.event-publisher";
import { RegisteredNewItemEventPublisher } from "../../events/publishers/registered-new-item.event-publisher";
import { RegisterProductionOrderEventPublisher } from "../../events/publishers/registered-production-order.event-publisher";
import { UpdateNameNewItemEventPublisher } from "../../events/publishers/updated- name-new-item.event-publisher";
import { IItemDomainService } from "../../services/item.domain-service";
import { IproductionOrderDomainService } from "../../services/production-order.domain-service";
import { GotItemEventPublisher } from '../../events/publishers/got-item.event-publisher';
import { UpdateCancelProduccionOrderEventPublisher } from '../../events/publishers/update-cancelled-production-order.event-publisher ';
import { UpdatedNameOrderProductionEventPublisher } from '../../events/publishers/updated-name-order-production.event-publisher';
import { UpdatedStateOrderProductionEventPublisher } from '../../events/publishers/updated-state-order-production.event-publisher';
import { UpdateDescriptionNewItemEventPublisher } from '../../events/publishers/updated- description-new-item.event-publishe';
import { UpdatePriceNewItemEventPublisher } from '../../events/publishers/updated- price-new-item.event-publisher';

export class ProductionOrderAgregate implements IproductionOrderDomainService, IItemDomainService {

    private readonly productionOrderService: IproductionOrderDomainService;
    private readonly itemService: IItemDomainService;
    private readonly updatePriceNewItemEventPublisher: UpdatePriceNewItemEventPublisher <IItemDomainEntity>;
    private readonly updateDescriptionNewItemEventPublisher: UpdateDescriptionNewItemEventPublisher<IItemDomainEntity>;
    private readonly updatePriceProductionOrderEventPublisher: UpdatePriceProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updateCancelProductionOrderEventPublisher: UpdateCancelProduccionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly gotItemEventPublisher: GotItemEventPublisher<IItemDomainEntity>;
    private readonly gotProductionOrderEventPublisher: GotProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly registerNewItemEventPublisher: RegisteredNewItemEventPublisher<IItemDomainEntity>;
    private readonly registerProductionOrderEventPublisher: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updatedetailProductionOrderEventPublisher: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updateNameNewItemEventPublisher: UpdateNameNewItemEventPublisher<IItemDomainEntity>;
    private readonly updateStateProductionOrderEventPublisher: UpdatedStateOrderProductionEventPublisher<ProductionOrderDomainEntity>;

    constructor(
        {   productionOrderService,
            itemService,
            updateDescriptionNewItemEventPublisher,
            updateCancelProductionOrderEventPublisher,
            gotProductionOrderEventPublisher,
            gotItemEventPublisher,
            registerNewItemEventPublisher,
            registerProductionOrderEventPublisher,
            updatePriceProductionOrderEventPublisher,
            updatePriceNewItemEventPublisher,
            updateNameNewItemEventPublisher,
            updateNameProduccionOrderEventPublisher,
            updateStateProductionOrderEventPublisher,
        }:
            {
                productionOrderService?: IproductionOrderDomainService;
                itemService?: IItemDomainService;
                updateDescriptionNewItemEventPublisher?: UpdateDescriptionNewItemEventPublisher<IItemDomainEntity>;
                updateNameProduccionOrderEventPublisher?: UpdatedNameOrderProductionEventPublisher<ProductionOrderDomainEntity>;
                updateStateProductionOrderEventPublisher?: UpdatedStateOrderProductionEventPublisher<ProductionOrderDomainEntity>;
                updateCancelProductionOrderEventPublisher?: UpdateCancelProduccionOrderEventPublisher<ProductionOrderDomainEntity>;
                gotItemEventPublisher?: GotItemEventPublisher<IItemDomainEntity>;
                gotProductionOrderEventPublisher?: GotProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                registerNewItemEventPublisher?: RegisteredNewItemEventPublisher<IItemDomainEntity>;
                registerProductionOrderEventPublisher?: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                updatePriceProductionOrderEventPublisher?: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                updatePriceNewItemEventPublisher?: UpdatePriceNewItemEventPublisher<IItemDomainEntity>;
                updateNameNewItemEventPublisher?: UpdateNameNewItemEventPublisher<IItemDomainEntity>;
                

            }) {}
    async updatePriceNewItem(itemId: string, price: number): Promise<IItemDomainEntity> {
        if (!this.updatePriceNewItemEventPublisher) {
            throw new AggregateRootException('updatePriceNewItemEventPublisher is not defined');
        }
        if (!this.itemService) {
            throw new AggregateRootException('itemService is not defined');
        }
        const respuesta = await this.itemService.updatePriceNewItem(itemId, price);
        this.updatePriceNewItemEventPublisher.response = respuesta;
        this.updatePriceNewItemEventPublisher.publish();
        return respuesta;
    }
    async updateDescriptionNewItem(itemId: string, description: string): Promise<IItemDomainEntity> {
        if (!this.updateDescriptionNewItemEventPublisher) {
            throw new AggregateRootException('updateDescriptionNewItemEventPublisher is not defined');
        }
        if (!this.itemService) {
            throw new AggregateRootException('itemService is not defined');
        }
        const respuesta = await this.itemService.updateDescriptionNewItem(itemId, description);
        this.updateDescriptionNewItemEventPublisher.response = respuesta;
        this.updateDescriptionNewItemEventPublisher.publish();
        return respuesta;
    }
    async updateNameNewItem(itemId: string, name:string): Promise<IItemDomainEntity> {
        if (!this.updateNameNewItemEventPublisher) {
            throw new AggregateRootException('updateNameNewItemEventPublisher is not defined');
        }
        if (!this.itemService) {
            throw new AggregateRootException('itemService is not defined');
        }
        const respuesta = await this.itemService.updateNameNewItem(itemId, name);
        this.updateNameNewItemEventPublisher.response = respuesta;
        this.updateNameNewItemEventPublisher.publish();
        return respuesta;

    }
    async updatestateProduccionOrder(ProductionOrderId: string, state: boolean): Promise<ProductionOrderDomainEntity> {
        if (!this.updateStateProductionOrderEventPublisher) {
            throw new AggregateRootException('updateStateProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.updatestateProduccionOrder(ProductionOrderId, state);
        this.updateStateProductionOrderEventPublisher.response = respuesta;
        this.updateStateProductionOrderEventPublisher.publish();
        return respuesta;

    }
    async updateProductionOrderName(ProductionOrderId: string, name: string): Promise<ProductionOrderDomainEntity> {
        if (!this.updatedetailProductionOrderEventPublisher) {
            throw new AggregateRootException('updatedetailProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.updateProductionOrderName(ProductionOrderId, name);
        this.updatedetailProductionOrderEventPublisher.response = respuesta;
        this.updatedetailProductionOrderEventPublisher.publish();
        return respuesta;
    }

    async registerNewItem(itemId: string, name:string, description:string, price: number): Promise<IItemDomainEntity> {
        if (!this.registerNewItemEventPublisher) {
            throw new AggregateRootException('registerNewItemEventPublisher is not defined');
        }
        if (!this.itemService) {
            throw new AggregateRootException('itemService is not defined');
        }
        const respuesta = await this.itemService.registerNewItem(itemId, name, description, price);
        this.registerNewItemEventPublisher.response = respuesta;
        this.registerNewItemEventPublisher.publish();
        return respuesta;
        
    }
    async registerProductionOrder(ProductionOrderId: string , date: Date, name: string, price: number, referencenumber: number, state: boolean, cancel: boolean): Promise<ProductionOrderDomainEntity> {
        if (!this.registerProductionOrderEventPublisher) {
            throw new AggregateRootException('registerProductionOrderEventPublisher is not defined');
        }
        if(!this.productionOrderService){
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.registerProductionOrder(ProductionOrderId, date, name, price, referencenumber, state, cancel);
        this.registerProductionOrderEventPublisher.response = respuesta;
        this.registerProductionOrderEventPublisher.publish();
        return respuesta;
    }
    
    async getItem(itemId: string): Promise<IItemDomainEntity> {
       if (!this.gotItemEventPublisher) {
            throw new AggregateRootException('gotItemEventPublisher is not defined');
        }
        if (!this.itemService) {
            throw new AggregateRootException('itemService is not defined');
        }
        const respuesta = await this.itemService.getItem(itemId);
        this.gotItemEventPublisher.response = respuesta;
        this.gotItemEventPublisher.publish();
        return respuesta;
    }
    async getProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        if (!this.gotProductionOrderEventPublisher) {
            throw new AggregateRootException('gotProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.getProductionOrder(ProductionOrderId);
        this.gotProductionOrderEventPublisher.response = respuesta;
        this.gotProductionOrderEventPublisher.publish();
        return respuesta;

    }
    

    async updatePriceProductionOrder(ProductionOrderId: string, price: number): Promise<ProductionOrderDomainEntity> {
        if (!this.updatePriceProductionOrderEventPublisher) {
            throw new AggregateRootException('updatePriceProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.updatePriceProductionOrder(ProductionOrderId, price);
        this.updatePriceProductionOrderEventPublisher.response = respuesta;
        this.updatePriceProductionOrderEventPublisher.publish();
        return respuesta;
    }
    async updatecancelProduccionOrder(ProductionOrderId: string, cancel?: boolean): Promise<ProductionOrderDomainEntity> {
        if (!this.updateCancelProductionOrderEventPublisher) {
            throw new AggregateRootException('updateCancelProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.updatecancelProduccionOrder(ProductionOrderId, cancel);
        this.updateCancelProductionOrderEventPublisher.response = respuesta;
        this.updateCancelProductionOrderEventPublisher.publish();
        return respuesta;

    }

}