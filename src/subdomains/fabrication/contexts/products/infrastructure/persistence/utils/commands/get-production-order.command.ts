import { IGetProductionOrderCommand } from './../../../../domain/interfaces/commands/get-production-order.command';

export class GetProductionOrderCommand implements IGetProductionOrderCommand {
    productionOrderId: string;
    
}