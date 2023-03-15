import { IsBoolean } from "./is-boolean.validations";

describe( 'IsBoolean' , () => {
    test( 'deberia retornar true si el valor es un booleano' , () => {
        // Arrange
        const value =  true;
        const expected =  true;
        // Act
        const result = IsBoolean(value);
        // Assert
        expect(result).toBe(expected); 
    } );
    test( 'deberia retornar false si el valor no es un booleano' , () => {
        // Arrange
        const value =  'true';
        const expected =  false;
        // Act
        const result = IsBoolean(value);
        // Assert
        expect(result).toBe(expected); 
    });
    test( 'deberia retornar false si el valor es un numero' , () => {
        // Arrange
        const value =  1;
        const expected =  false;
        // Act
        const result = IsBoolean(value);
        // Assert
        expect(result).toBe(expected); 

    });
});