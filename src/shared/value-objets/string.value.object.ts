import { IErrorValueObject } from '@sofka';
import { IsEmpty } from '@validations';
import { ValueObjectBase } from "@sofka";
import { IsStringMinLength } from '@validations';
import { IsStringMaxLength } from '@validations';


/**
 * Clase abstracta para definir objetos de valor que almacenan cadenas de texto.
 * Esta clase extiende la clase base `ValueObjectBase` y define métodos para validar la cadena de texto almacenada.
 *
 * @export
 * @abstract
 * @class StringValueObjectBase
 * @extends {ValueObjectBase<string>} extiende la clase ValueObjectBase con un tipo de valor string
 */
export abstract class StringValueObjectBase extends ValueObjectBase<string>{
    constructor(value: string) {
        super(value);
    }
    validateData(): void {
        if (this.value){
            this.IsEmpty()
            this.IsStringMax()
            this.IsStringMin()
        }
        
    }
    private IsEmpty(): void {
        if (IsEmpty(this.value)) {
            this.setError({field: 'name', message:'no puedes enviar este campo vacio'} as IErrorValueObject)
        }
    }
    private IsStringMax(): void {
        if (IsStringMaxLength(this.value, 100)) {

            this.setError({field: 'name', message:'el tamaño maximo es 100'} as IErrorValueObject)
        }

    }
    private IsStringMin(): void {
        if (IsStringMinLength(this.value, 5)) {

            this.setError({field: 'name', message:'el tamaño minimo es 5'} as IErrorValueObject)
        }

    }

}