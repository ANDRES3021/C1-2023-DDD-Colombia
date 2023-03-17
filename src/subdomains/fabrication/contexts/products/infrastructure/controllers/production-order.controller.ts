import { createProductionOrderCommand } from './../persistence/utils/commands/create-production-order.command';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductionOrderUseCase } from "../../application/use-case/create-production-order/create-production-order.use-case";
import { RegisterProductionOrderPublisher } from "../messaging/publisher/registered-production-order.publisher";
import { ProductionOrderService } from "../persistence/services/production-order.service";
import { IcreateProductionOrderResponse } from '../../domain/interfaces/responses/created-production-order.response';
import { IGetProductionOrderResponse } from '../../domain/interfaces/responses/get-production-order-response';
import { GetProductionOrderUseCase } from '../../application/use-case/get-production-order/get-production-order-use-case';
import { GetProductionOrderPublisher } from '../messaging/publisher/got-productionorder.publisher';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetProductionOrderCommand } from '../persistence/utils/commands/get-production-order.command';
import { type } from 'os';


/**
 *
 *
 * @export
 * @class ProductionOrderController
 */
@Controller('production-order')
@ApiTags('productionorder')
export class ProductionOrderController {
    constructor(
        private readonly productionOrderService: ProductionOrderService,
        private readonly registerProductionOrderPublisher: RegisterProductionOrderPublisher,
        private readonly getProductionOrderPublisher : GetProductionOrderPublisher,

    ) {}
    /**
     *
     *
     * @param {createProductionOrderCommand} command
     * @return  {Promise<IcreateProductionOrderResponse>} retorna una promesa de tipo IcreateProductionOrderResponse
     * @memberof ProductionOrderController
     */
    @Post()
    @ApiOperation({ summary: 'por medio de este endpoint puedo insetar los objetos de valor de una entidad productionorder' })
    @ApiResponse({ status: 201, description: 'Orden de produccion creada', type: createProductionOrderCommand})
    @ApiResponse({ status: 400, description: 'Error en la creacion de la orden de produccion'})
    async registerProductionOrder(@Body() command : createProductionOrderCommand): Promise<IcreateProductionOrderResponse> {
        const useCase = new CreateProductionOrderUseCase(
            this.productionOrderService, 
            this.registerProductionOrderPublisher);
            
        return await useCase.execute(command);
    }
    /**
     *
     *
     * @param {IGetProductionOrderCommand} command
     * @return  {Promise<IGetProductionOrderResponse>} retorna una promesa de tipo IGetProductionOrderResponse
     * @memberof ProductionOrderController
     */
    @Post('obtener')
    @ApiOperation({ summary: 'por medio de este endpoint puedo obtener los objetos de valor de una entidad productionorder' })
    @ApiResponse({ status: 200, description: 'Orden de produccion encontrada', type: GetProductionOrderCommand})
    @ApiResponse({ status: 400, description: 'Error en la busqueda de la orden de produccion'})
    async getProductionOrders(@Body() command : GetProductionOrderCommand): Promise<IGetProductionOrderResponse> {
        const useCase = new GetProductionOrderUseCase(
            this.productionOrderService, 
            this.getProductionOrderPublisher);
            
        return await useCase.execute(command);
    }



}