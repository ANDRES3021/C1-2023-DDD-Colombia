import { IcreateProductionOrderCommand } from './../../../../domain/interfaces/commands/create-production-order.command';
import { IsDate, IsNumber, IsString, IsBoolean } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';


export class createProductionOrderCommand implements IcreateProductionOrderCommand{
    
    @ApiProperty()
    productionOrderId: string;
    @IsDate({message: "La fecha no es valida"})
    @ApiProperty()
    date: Date;
    @IsString({message: "El nombre no es valido"})
    @ApiProperty()
    name: string;
    @IsNumber({}, {message: "El precio no es valido"})
    @ApiProperty()
    price: number;
    @IsNumber({}, {message: "El numero de referencia no es valido"})
    @ApiProperty()
    referencenumber: number;
    @IsBoolean({message: "El estado no es valido"})
    state: boolean;
    @IsBoolean({message: "El estado no es valido"})
    @ApiProperty()
    cancel: boolean;
    @ApiProperty()
    items: { itemid: string; name: string; description: string; price: number; }[];
    
}