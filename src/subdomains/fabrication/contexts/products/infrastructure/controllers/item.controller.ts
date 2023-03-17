import { Body, Controller, Post } from "@nestjs/common";
import { CreateItemUseCase } from "../../application/use-case/create-item/create-item.use-case";
import { RegisteredNewItemEventPublisher } from "../../domain/events/publishers/registered-new-item.event-publisher";
import { IcreateItemCommand } from "../../domain/interfaces/commands/create-item.command";
import { IcreateItemResponse } from "../../domain/interfaces/responses/create-item.response";
import { RegisterItemPublisher } from "../messaging/publisher/registered-new-item.publisher";
import { ItemService } from "../persistence/services/item.service";

@Controller('item')
export class ItemController {
    constructor(
        private readonly itemService: ItemService,
        private readonly registerNewItemEventPublisher: RegisterItemPublisher
    ) { }
    @Post()
    async registerItem(@Body() command: IcreateItemCommand): Promise<IcreateItemResponse> {
        const useCase = new CreateItemUseCase(
            this.itemService,
            this.registerNewItemEventPublisher);
        return await useCase.execute(command);
    }
}