import { IUseCase, ValueObjectErrorHandler, ValueObjectException } from "src/shared/sofka";
import { ProductionOrderAgregate } from "../../../domain/agregregates/production-order/production-order.aggregate";
import { GotProductionOrderEventPublisher } from "../../../domain/events/publishers/got-productionorder.event-publisher";
import { IGetProductionOrderUseCase } from "../../../domain/interfaces/commands/get-production-order.command";
import { IGetProductionOrderResponse } from "../../../domain/interfaces/responses/get-production-order-response";
import { IproductionOrderDomainService } from "../../../domain/services/production-order.domain-service";
import { ProductionOrderIdValueObject } from "../../../domain/value-objects/production-order/prodution-order-id/production-order-id.value-object";

/**
 *
 *
 * @export
 * @class GetProductionOrderUseCase
 * @extends {ValueObjectErrorHandler} extiendo de ValueObjectErrorHandler para poder manejar los errores de los value objects
 * @implements {IUseCase<IGetProductionOrderUseCase, IGetProductionOrderResponse>} implemento la interfaz IUseCase
 */
export class GetProductionOrderUseCase 
extends ValueObjectErrorHandler
implements IUseCase <IGetProductionOrderUseCase, IGetProductionOrderResponse> {
    productionOrderAgregate: ProductionOrderAgregate;
    /**
     * Creates an instance of GetProductionOrderUseCase.
     * @param {IproductionOrderDomainService} productionOrderService 
     * @param {GotProductionOrderEventPublisher} gotProductionOrderEventPublisher
     * @memberof GetProductionOrderUseCase
     */
    constructor(
        private readonly productionOrderService: IproductionOrderDomainService, 
        private readonly gotProductionOrderEventPublisher: GotProductionOrderEventPublisher
        )
        {
            super();
            this.productionOrderAgregate = new ProductionOrderAgregate(
                {
                    productionOrderService,
                    gotProductionOrderEventPublisher
                }
            );
        }
        
    async execute(command: IGetProductionOrderUseCase): Promise<IGetProductionOrderResponse> {
        const productionOrderId = new ProductionOrderIdValueObject(command.productionOrderId);
        if (productionOrderId.hasErrors() === true) {
            this.setErrors(productionOrderId.getErrors());
        }
        if (this.hasErrors()===true) {
            throw new ValueObjectException('Error al crear la orden de produccion', this.getErrors());
        }
        const data = await this.productionOrderAgregate.getProductionOrder(productionOrderId.value);
        return {data};
    }
}