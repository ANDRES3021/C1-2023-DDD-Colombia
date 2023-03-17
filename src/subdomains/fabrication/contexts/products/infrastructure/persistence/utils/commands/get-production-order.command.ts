import { ApiProperty } from '@nestjs/swagger';
import { IGetProductionOrderCommand } from './../../../../domain/interfaces/commands/get-production-order.command';

export class GetProductionOrderCommand implements IGetProductionOrderCommand {
    @ApiProperty()
    productionOrderId: string;
    
}