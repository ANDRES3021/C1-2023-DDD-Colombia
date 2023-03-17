import { ApiProperty } from "@nestjs/swagger";
import { IcreateItemCommand } from "../../../../domain/interfaces/commands/create-item.command";

export class CreateItemCommand implements IcreateItemCommand {
    @ApiProperty()
    itemid: string;
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    
}