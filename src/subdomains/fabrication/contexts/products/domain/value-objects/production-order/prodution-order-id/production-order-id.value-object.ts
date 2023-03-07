import { UUIDValueObjectBase } from "src/shared/sofka/value-objets/uuid.value.object";

/**
 * Esta es una clase que representa un objeto de valor para el ID de una orden de producción
 *
 * @export
 * @class ProductionOrderIdValueObject
 * @extends {UUIDValueObjectBase}
 */
export class ProductionOrderIdValueObject extends UUIDValueObjectBase{
    constructor(value: string) {
        super(value)
    }
}