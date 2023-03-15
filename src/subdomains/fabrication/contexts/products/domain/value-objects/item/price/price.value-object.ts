import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsEmpty } from '@validations';
import { IsGreaterZero } from '@validations';
/**
 * La clase PriceValueObject representa un objeto de valor de precio que debe ser mayor que cero y no puede estar vacío.
 *
 * @export
 * @class PriceValueObject
 * @extends {ValueObjectBase<number>} extiende la clase ValueObjectBase con un tipo de valor number
 */
export class PriceValueObject extends ValueObjectBase<number>{
    
    constructor(value:number) {
        super(value)
    }
    validateData(): void {
        this.IsPositive()
        // this.IsEmpty()
    }
    private IsPositive(): void {
        if (IsGreaterZero(this.value)){
            this.setError({field: 'name', message:'debe ser un numero mas grande que cero'} as IErrorValueObject)
        }
    }
//     private IsEmpty(): void {
//         if (IsEmpty(this.value)) {
//             this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
//         }
//     }
}

