import { UUIDValueObjectBase } from 'src/shared/sofka/value-objets/uuid.value.object';
/**
 * Esta es una clase que representa un objeto de valor para un identificador de artículo.
 *
 * @export
 * @class ItemIdValueObject
 * @extends {UUIDValueObjectBase}
 */
export class ItemIdValueObject extends UUIDValueObjectBase {
    constructor(value:string) {
        super(value)
    }
}
console.log(new ItemIdValueObject('no es id'))