import { StringValueObjectBase} from 'src/shared/sofka/value-objets/string.value.object'
/**
 * Esta es una clase que representa un objeto de valor para el nombre de un artículo.
 *
 * @export
 * @class NameItemValueObject
 * @extends {StringValueObjectBase}
 */
export class NameItemValueObject extends StringValueObjectBase {
    constructor(value: string){
        super(value)
    }
}