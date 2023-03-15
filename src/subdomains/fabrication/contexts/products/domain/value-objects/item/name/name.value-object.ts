import { StringValueObjectBase} from '../../../../../../../../shared/value-objets/string.value.object';
/**
 * Esta es una clase que representa un objeto de valor para el nombre de un artículo.
 *
 * @export
 * @class NameItemValueObject
 * @extends {StringValueObjectBase} extiende la clase StringValueObjectBase
 */
export class NameItemValueObject extends StringValueObjectBase {
    constructor(value: string){
        super(value)
    }
}
console.log(new NameItemValueObject('ans'))