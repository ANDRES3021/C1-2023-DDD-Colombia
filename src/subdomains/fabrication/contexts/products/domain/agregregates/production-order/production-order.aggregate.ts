import { GetProductionOrderHelper } from './helpers/production-order-helpers/get-produccion-order/get-produccion-order.helper';
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
import { RegisterProductionOrderHelper } from './helpers/production-order-helpers/register-production-order/register-production-order';
import { UpdateCancelProductionOrderHelper } from './helpers/production-order-helpers/update-cancel-produccion-order/update-cancel-produccion-order.helper';
import { UpdateNameProductionOrderHelper } from './helpers/production-order-helpers/update-name-producrion-order/update-name-producrion-order.helper';
import { UpdateStateProductionOrderHelper } from './helpers/production-order-helpers/update-state-production-order/update-state-production-order.helper';
import { UpdatePiceProductionOrderHelper } from './helpers/production-order-helpers/update-price-production-order/update-price-production-order.helper';
import { GetItemHelper } from './helpers/item-helpers/get-Item/get-Item.helper';
import { RegisterNewItemHelper } from './helpers/item-helpers/register-new-Item/register-new-Item.helper';
import { UpdateDescriptionNewItemHelper } from './helpers/item-helpers/update-description-new-Item/update-description-new-Item.helper';
import { UpdateNameNewItemHelper } from './helpers/item-helpers/update-name-new-Item/update-name-new-Item.helper';
import { UpdatePriceNewItemHelper } from './helpers/item-helpers/update-price-new-Item/update-price-new-Item.helper';

export class ProductionOrderAgregate implements IproductionOrderDomainService, IItemDomainService {

    private readonly productionOrderService?: IproductionOrderDomainService;
    private readonly itemService?: IItemDomainService;
    private readonly updatePriceNewItemEventPublisher: UpdatePriceNewItemEventPublisher<IItemDomainEntity>;
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
        { productionOrderService,
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


            }) {
        this.productionOrderService = productionOrderService;
        this.itemService = itemService;
        this.updateDescriptionNewItemEventPublisher = updateDescriptionNewItemEventPublisher ?? this.updateDescriptionNewItemEventPublisher;
        this.updateCancelProductionOrderEventPublisher = updateCancelProductionOrderEventPublisher ?? this.updateCancelProductionOrderEventPublisher;
        this.gotProductionOrderEventPublisher = gotProductionOrderEventPublisher ?? this.gotProductionOrderEventPublisher;
        this.gotItemEventPublisher = gotItemEventPublisher ?? this.gotItemEventPublisher;
        this.registerNewItemEventPublisher = registerNewItemEventPublisher ?? this.registerNewItemEventPublisher;
        this.registerProductionOrderEventPublisher = registerProductionOrderEventPublisher ?? this.registerProductionOrderEventPublisher;
        this.updatePriceProductionOrderEventPublisher = updatePriceProductionOrderEventPublisher ?? this.updatePriceProductionOrderEventPublisher;
        this.updatePriceNewItemEventPublisher = updatePriceNewItemEventPublisher ?? this.updatePriceNewItemEventPublisher;
        this.updateNameNewItemEventPublisher = updateNameNewItemEventPublisher ?? this.updateNameNewItemEventPublisher;
        this.updateStateProductionOrderEventPublisher = updateStateProductionOrderEventPublisher ?? this.updateStateProductionOrderEventPublisher;
    }
    updateNameProductionOrder(ProductionOrderId: string, name: string): Promise<ProductionOrderDomainEntity> {
        return UpdateNameProductionOrderHelper( ProductionOrderId, name, this.updateCancelProductionOrderEventPublisher, this.productionOrderService);
    }
    async updatePriceNewItem(itemId: string, price: number): Promise<IItemDomainEntity> {
        return UpdatePriceNewItemHelper(itemId, price, this.updatePriceNewItemEventPublisher, this.itemService);
    }
    async updateDescriptionNewItem(itemId: string, description: string): Promise<IItemDomainEntity> {
        return UpdateDescriptionNewItemHelper(itemId, description, this.updateDescriptionNewItemEventPublisher, this.itemService);
    }
    async updateNameNewItem(itemId: string, name: string): Promise<IItemDomainEntity> {
        return UpdateNameNewItemHelper(itemId, name, this.updateNameNewItemEventPublisher, this.itemService);

    }
    async updatestateProduccionOrder(ProductionOrderId: string, state: boolean): Promise<ProductionOrderDomainEntity> {
        return UpdateStateProductionOrderHelper(ProductionOrderId, state, this.updateStateProductionOrderEventPublisher, this.productionOrderService);
    }

    async registerNewItem(itemId: string, name: string, description: string, price: number): Promise<IItemDomainEntity> {
        return RegisterNewItemHelper(itemId, name, description, price, this.registerNewItemEventPublisher, this.itemService);

    }
    async registerProductionOrder(ProductionOrderId: string, date: Date, name: string, price: number, referencenumber: number, state: boolean, cancel: boolean): Promise<ProductionOrderDomainEntity> {
       return RegisterProductionOrderHelper(ProductionOrderId, date, name, price, referencenumber, state, cancel, this.registerProductionOrderEventPublisher, this.productionOrderService,);
    }

    async getItem(itemId: string): Promise<IItemDomainEntity> {
        return GetItemHelper(itemId, this.gotItemEventPublisher, this.itemService);
    }
    async getProductionOrder(ProductionOrderId: string): Promise<ProductionOrderDomainEntity> {
        return GetProductionOrderHelper(ProductionOrderId, this.gotProductionOrderEventPublisher, this.productionOrderService);
    }


    async updatePriceProductionOrder(ProductionOrderId: string, price: number): Promise<ProductionOrderDomainEntity> {
        return UpdatePiceProductionOrderHelper(ProductionOrderId, price, this.updatePriceProductionOrderEventPublisher, this.productionOrderService);
    }
    async updatecancelProduccionOrder(ProductionOrderId: string, cancel: boolean): Promise<ProductionOrderDomainEntity> {
        return UpdateCancelProductionOrderHelper(ProductionOrderId, cancel, this.updateCancelProductionOrderEventPublisher, this.productionOrderService);

    }

}


