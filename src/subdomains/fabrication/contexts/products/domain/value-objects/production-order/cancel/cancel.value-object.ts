import { StateValueObjectBase } from "src/shared/value-objets/state.value.object";

/**
 * Esta es una clase que representa un objeto de valor de estado para cancelar algo.

 *
 * @export
 * @class CancelValueObject
 * @extends {StateValueObjectBase} extiende la clase StateValueObjectBase
 */
export class CancelValueObject extends StateValueObjectBase {
    constructor(value: boolean){
        super(value)
    }  
}