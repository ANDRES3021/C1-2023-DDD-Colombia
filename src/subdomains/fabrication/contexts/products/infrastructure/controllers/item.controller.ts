import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateItemUseCase } from "../../application/use-case/create-item/create-item.use-case";
import { GetItemUseCase } from "../../application/use-case/get-item/get-item-use-case";
import { RegisteredNewItemEventPublisher } from "../../domain/events/publishers/registered-new-item.event-publisher";
import { IcreateItemCommand } from "../../domain/interfaces/commands/create-item.command";
import { IGetItemCommand } from "../../domain/interfaces/commands/get-item.command";
import { IcreateItemResponse } from "../../domain/interfaces/responses/create-item.response";
import { IGetItemResponse } from "../../domain/interfaces/responses/get-item.response";
import { GetItemPublisher } from "../messaging/publisher/got-item.publisher";
import { RegisterItemPublisher } from "../messaging/publisher/registered-new-item.publisher";
import { ItemService } from "../persistence/services/item.service";

/**
 *
 *
 * @export
 * @class ItemController el controlador de item
 */
@Controller('item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService,
        private readonly registerNewItemEventPublisher: RegisterItemPublisher,
        private readonly gotItemEventPublisher: GetItemPublisher
    ) { }
    /**
     *
     *
     * @param {IcreateItemCommand} command
     * @return   {Promise<IcreateItemResponse>} retorna una promesa de tipo IcreateItemResponse
     * @memberof ItemController
     */
    @Post()
    async registerItem(@Body() command: IcreateItemCommand): Promise<IcreateItemResponse> {
        const useCase = new CreateItemUseCase(
            this.itemService,
            this.registerNewItemEventPublisher);
        return await useCase.execute(command);
    }
    /**
     *
     *
     * @param {IGetItemCommand} command
     * @return {Promise<IGetItemResponse>} retorna una promesa de tipo IGetItemResponse
     * @memberof ItemController
     */
    @Get('obtener')
    async getItems(@Body() command: IGetItemCommand): Promise<IGetItemResponse> {
        const useCase = new GetItemUseCase(
            this.itemService,
            this.gotItemEventPublisher);
        return await useCase.execute(command);
    }
}