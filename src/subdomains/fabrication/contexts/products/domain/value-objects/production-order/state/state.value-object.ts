import {  StateValueObjectBase } from "src/shared/value-objets/state.value.object";

/**
 * Esta es una clase que representa un objeto de valor para un estado booleano.
 *
 * @export
 * @class StateValueObject
 * @extends {StateValueObjectBase}
 */
export class StateValueObject extends StateValueObjectBase {
    constructor(value: boolean){
        super(value)
    }  
}