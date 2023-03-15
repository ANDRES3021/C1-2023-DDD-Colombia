import { IErrorValueObject, ValueObjectBase } from "src/shared/sofka"
import { IsEmpty } from "@validations"
import { IsGreaterZero } from "@validations"

/**
 * Esta es una clase que representa un objeto de valor para el número de referencia.
 *
 * @export
 * @class ReferenceNumberValueObject
 * @extends {ValueObjectBase<number>} extiende la clase ValueObjectBase con un tipo de valor number
 */
export class ReferenceNumberValueObject extends ValueObjectBase<number>{
    
    constructor(value:number) {
        super(value)
    }
    validateData(): void {
        this.IsPositive()
        this.IsEmpty()            
    }                  
    private IsPositive(): void {           
        if (IsGreaterZero(this.value)){
            this.setError({field: 'name', message:'debe ser un numero mas grande que cero'} as IErrorValueObject)
        }
    }
    private IsEmpty(): void { 
        if (IsEmpty(this.value)) {
            this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
        }
    }
}