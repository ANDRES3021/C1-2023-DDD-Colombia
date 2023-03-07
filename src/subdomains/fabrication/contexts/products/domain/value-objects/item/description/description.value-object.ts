import { StringValueObjectBase } from 'src/shared/sofka/value-objets/string.value.object';
/**
 * Esta es una clase que representa un objeto de valor para una descripción de un artículo.
 *
 * @export
 * @class DescriptionItemValueObject
 * @extends {StringValueObjectBase}
 */
export class DescriptionItemValueObject extends StringValueObjectBase {
    constructor(value: string) {
        super(value)
    }
}