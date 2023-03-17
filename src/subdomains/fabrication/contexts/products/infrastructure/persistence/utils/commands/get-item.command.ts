import { ApiProperty } from "@nestjs/swagger";
import { IGetItemCommand } from "../../../../domain/interfaces/commands/get-item.command";

export class GetItemCommand implements IGetItemCommand {
    @ApiProperty()
    itemId: string;
}