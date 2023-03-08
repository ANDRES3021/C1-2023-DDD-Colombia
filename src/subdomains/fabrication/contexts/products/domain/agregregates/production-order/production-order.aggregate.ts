import { AggregateRootException } from './../../../../../../../shared/sofka/exceptions/aggregate-root.exception';
import { IItemDomainEntity } from "../../entities/interfaces/item.domain-entity.interface";
import { ProductionOrderDomainEntity } from "../../entities/production-order.domain-entity";
import { CancelProductionOrdeEventPublisher } from "../../events/publishers/cancelled-production-order.event-publisher ";
import { GotProductionOrderEventPublisher } from "../../events/publishers/got-productionorder.event-publisher";
import { RegisteredNewItemEventPublisher } from "../../events/publishers/registered-new-item.event-publisher";
import { RegisterProductionOrderEventPublisher } from "../../events/publishers/registered-production-order.event-publisher";
import { UpdatedNewItemEventPublisher } from "../../events/publishers/updated-new-item.event-publisher";
import { IItemDomainService } from "../../services/item.domain-service";
import { IproductionOrderDomainService } from "../../services/production-order.domain-service";
import { GotItemEventPublisher } from '../../events/publishers/got-item.event-publisher copy';

export class ProductionOrderAgregate implements IproductionOrderDomainService, IItemDomainService {

    private readonly productionOrderService: IproductionOrderDomainService;
    private readonly itemService: IItemDomainService;
    private readonly cancelProductionOrderEventPublisher: CancelProductionOrdeEventPublisher<ProductionOrderDomainEntity>;
    private readonly gotItemEventPublisher: GotItemEventPublisher<IItemDomainEntity>;
    private readonly gotProductionOrderEventPublisher: GotProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly registerNewItemEventPublisher: RegisteredNewItemEventPublisher<IItemDomainEntity>;
    private readonly registerProductionOrderEventPublisher: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updatePriceProductionOrderEventPublisher: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updatedetailProductionOrderEventPublisher: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
    private readonly updatedNewItemEventPublisher: UpdatedNewItemEventPublisher<IItemDomainEntity>;

    constructor(
        {   productionOrderService,
            itemService,
            cancelProductionOrderEventPublisher,
            gotProductionOrderEventPublisher,
            gotItemEventPublisher,
            registerNewItemEventPublisher,
            registerProductionOrderEventPublisher,
            updatePriceProductionOrderEventPublisher,
            updatedetailProductionOrderEventPublisher,
            updatedNewItemEventPublisher
        }:
            {
                productionOrderService?: IproductionOrderDomainService;
                itemService?: IItemDomainService;
                cancelProductionOrderEventPublisher?: CancelProductionOrdeEventPublisher<ProductionOrderDomainEntity>;
                gotItemEventPublisher?: GotItemEventPublisher<IItemDomainEntity>;
                gotProductionOrderEventPublisher?: GotProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                registerNewItemEventPublisher?: RegisteredNewItemEventPublisher<IItemDomainEntity>;
                registerProductionOrderEventPublisher?: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                updatePriceProductionOrderEventPublisher?: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                updatedetailProductionOrderEventPublisher?: RegisterProductionOrderEventPublisher<ProductionOrderDomainEntity>;
                updatedNewItemEventPublisher?: UpdatedNewItemEventPublisher<IItemDomainEntity>;

            }) {}

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
    updateProductionOrderDetail(ProductionOrderId: string, data: { name?: string | undefined; price?: number | undefined; state?: boolean | undefined; }): Promise<ProductionOrderDomainEntity> {
        throw new Error("Method not implemented.");
    }
    updateNewItemDetail(itemId: string, description?: string | undefined, price?: number | undefined): Promise<IItemDomainEntity> {
        throw new Error("Method not implemented.");
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
        if (!this.cancelProductionOrderEventPublisher) {
            throw new AggregateRootException('cancelProductionOrderEventPublisher is not defined');
        }
        if (!this.productionOrderService) {
            throw new AggregateRootException('productionOrderService is not defined');
        }
        const respuesta = await this.productionOrderService.updatecancelProduccionOrder(ProductionOrderId, cancel);
        this.cancelProductionOrderEventPublisher.response = respuesta;
        this.cancelProductionOrderEventPublisher.publish();
        return respuesta;

    }

}