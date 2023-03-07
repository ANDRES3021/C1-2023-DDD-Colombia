import { StringValueObjectBase} from 'src/shared/sofka/value-objets/string.value.object'
/**
 * Esta es una clase que representa un objeto de valor para el nombre de una orden de producción.
 *
 * @export
 * @class NameProductionOrderValueObject
 * @extends {StringValueObjectBase}
 */
export class NameProductionOrderValueObject extends StringValueObjectBase {
    constructor(value: string){
        super(value)
    }
}