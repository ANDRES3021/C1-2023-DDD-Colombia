import { IErrorValueObject } from './../interface/error-object-value.interface';
import { IsUUID4 } from "src/shared/validations/is-uuid-4.validation";
import { ValueObjectBase } from "../bases";
import { IsEmpty } from 'src/shared/validations/is-empty.validations';

/**
 *  Clase abstracta para  validar valores que deben ser cadenas de texto que representan un UUID válido.
 *
 * @export
 * @abstract
 * @class UUIDValueObjectBase
 * @extends {ValueObjectBase<string>}
 */
export abstract class UUIDValueObjectBase extends ValueObjectBase<string> {
    constructor(value: string) {
        super(value);
    }
    validateData(): void {
        this.IsEmpty()
        this.isUUID()
    }
    private isUUID(): void {
        if(IsUUID4(this.value)) {
            this.setError({
                field : 'name',
                message: 'este valor no es un UUID'
            } as IErrorValueObject);
        }
    }
    private IsEmpty(): void {
        if (IsEmpty(this.value)) {
            this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
        }
    }
}