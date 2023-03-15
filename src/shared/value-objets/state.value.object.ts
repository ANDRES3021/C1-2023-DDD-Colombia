import { IsEmpty } from '@validations';

import { ValueObjectBase } from "@sofka";
import { IErrorValueObject } from '@sofka';
import { IsBoolean } from '@validations';


/**
 * Clase abstracta que define un objeto de valor que representa el estado.
 * Extiende la clase ValueObjectBase con un tipo de valor booleano.
 * 
 * 
 * @export
 * @abstract
 * @class StateValueObjectBase 
 * @extends {ValueObjectBase<boolean>} extiende la clase ValueObjectBase con un tipo de valor booleano
 */
export abstract class StateValueObjectBase extends ValueObjectBase<boolean> {
    constructor(value: boolean) {
        super(value);
    }
    validateData(): void {
        this.IsBoolean()
        this.IsEmpty()
    }
    private IsBoolean(): void {
        if(IsBoolean(this.value)) {
            this.setError({field: 'name', message:'debe ser un booleano'} as IErrorValueObject)
        }
    }
    private IsEmpty(): void {
        if (IsEmpty(this.value)) {
            this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
        }
    }
}