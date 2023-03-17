import { createProductionOrderCommand } from './../persistence/utils/commands/create-production-order.command';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductionOrderUseCase } from "../../application/use-case/create-production-order/create-production-order.use-case";
import { RegisterProductionOrderPublisher } from "../messaging/publisher/registered-production-order.publisher";
import { ItemService } from "../persistence/services/item.service";
import { ProductionOrderService } from "../persistence/services/production-order.service";
import { IGetProductionOrderCommand } from '../../domain/interfaces/commands/get-production-order.command';
import { IcreateProductionOrderResponse } from '../../domain/interfaces/responses/created-production-order.response';
import { IGetProductionOrderResponse } from '../../domain/interfaces/responses/get-production-order-response';
import { GetProductionOrderUseCase } from '../../application/use-case/get-production-order/get-production-order-use-case';
import { GotProductionOrderEventPublisher } from '../../domain/events/publishers/got-productionorder.event-publisher';
import { GetProductionOrderPublisher } from '../messaging/publisher/got-productionorder.publisher';


@Controller('production-order')
export class ProductionOrderController {
    constructor(
        private readonly productionOrderService: ProductionOrderService,
        private readonly registerProductionOrderPublisher: RegisterProductionOrderPublisher,
        private readonly getProductionOrderPublisher : GetProductionOrderPublisher,

    ) {}
    @Post()
    async registerProductionOrder(@Body() command : createProductionOrderCommand): Promise<IcreateProductionOrderResponse> {
        const useCase = new CreateProductionOrderUseCase(
            this.productionOrderService, 
            this.registerProductionOrderPublisher);
        return await useCase.execute(command);
    }
    @Post('obtener')
    async getProductionOrders(@Body() command : IGetProductionOrderCommand): Promise<IGetProductionOrderResponse> {
        const useCase = new GetProductionOrderUseCase(
            this.productionOrderService, 
            this.getProductionOrderPublisher);
        return await useCase.execute(command);
    }



}