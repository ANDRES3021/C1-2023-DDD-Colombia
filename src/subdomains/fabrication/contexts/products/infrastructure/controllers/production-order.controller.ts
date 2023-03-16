import { createProductionOrderCommand } from './../persistence/utils/commands/create-production-order.command';
import { Body, Controller, Post } from "@nestjs/common";
import { CreateProductionOrderUseCase } from "../../application/use-case/create-production-order/create-production-order.use-case";
import { RegisterProductionOrderPublisher } from "../messaging/publisher/registered-production-order.publisher";
import { ItemService } from "../persistence/services/item.service";
import { ProductionOrderService } from "../persistence/services/production-order.service";


@Controller('production-order')
export class ProductionOrderController {
    constructor(
        private readonly productionOrderService: ProductionOrderService,
        private readonly registerProductionOrderPublisher: RegisterProductionOrderPublisher

    ) {}
    @Post()
    async registerProductionOrder(@Body() command : createProductionOrderCommand) {
        const useCase = new CreateProductionOrderUseCase(this.productionOrderService, this.registerProductionOrderPublisher);
        return await useCase.execute(command);
    }

}