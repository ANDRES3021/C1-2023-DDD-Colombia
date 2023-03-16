import { IcreateProductionOrderCommand } from './../../../../domain/interfaces/commands/create-production-order.command';
import { IsDate, IsNumber, IsString, IsBoolean } from "class-validator";


export class createProductionOrderCommand implements IcreateProductionOrderCommand{
    

    productionOrderId: string;
    @IsDate({message: "La fecha no es valida"})
    date: Date;
    @IsString({message: "El nombre no es valido"})
    name: string;
    @IsNumber({}, {message: "El precio no es valido"})
    price: number;
    @IsNumber({}, {message: "El numero de referencia no es valido"})
    referencenumber: number;
    @IsBoolean({message: "El estado no es valido"})
    state: boolean;
    @IsBoolean({message: "El estado no es valido"})
    cancel: boolean;
    itemids: { itemid: string; name: string; description: string; price: number; }[];
    
}