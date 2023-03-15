import { IsDategreatertoday } from '../../../../../../../../shared/validations/is-date/is-date.validations';
import { IErrorValueObject, ValueObjectBase } from '@sofka';
import { IsEmpty } from '@validations';
/**
 * Esta es una clase que representa un objeto de valor de fecha
 *
 * @export
 * @class DateValueObject
 * @extends {ValueObjectBase<Date>} extiende la clase ValueObjectBase con un tipo de valor Date
 */
export class DateValueObject extends ValueObjectBase<Date>{
    constructor(value?:Date) {
        super(value ? value : new Date())
    }
    validateData(): void {
        this.IsCurrentDate();
        this.IsEmpty();
    }
    private IsCurrentDate(): void {
        if (IsDategreatertoday(this.value)){
            this.setError({field: 'name', message:'no puedes enviar una fecha menor que el dia de ho'} as IErrorValueObject)
        }
    }
    private IsEmpty(): void { 
        if (IsEmpty(this.value)) {
            this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
        }
    }
}