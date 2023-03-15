import { IsGreaterZero } from "./is-greater-zero.validations";

describe( 'IsGreaterZero' , () => {
    test( 'deberia retornar true si el valor es un numero mayor que cero' , () => {
      // Arrange
      const num =  1 ;
      const expected =  true ;
      // Act
      const result = IsGreaterZero(num);
      // Assert
      expect(result).toBe(expected); 
    } );
    test( 'deberia retornar false si el valor es un numero menor que cero' , () => {
      // Arrange
      const num =  -1 ;
      const expected =  false ;
      // Act
      const result = IsGreaterZero(num);
      // Assert
      expect(result).toBe(expected); 
    } );
    test( 'deberia retornar false si el valor es cero' , () => {
      // Arrange
      const num =  0 ;
      const expected =  false ;
      // Act
      const result = IsGreaterZero(num);
      // Assert
      expect(result).toBe(expected); 
    } );
    }

)