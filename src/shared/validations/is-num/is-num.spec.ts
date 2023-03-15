import { IsNumeric } from "./is-num.validations";

describe( 'IsNumeric' , () => {
  test( 'deberia retornar true si el valor es un numero' , () => {
    // Arrange
    const num =  1 ;
    const expected =  true ;
    // Act
    const result = IsNumeric(num);
    // Assert
    expect(result).toBe(expected); 
  } );
  test( 'deberia retornar false si el valor no es un numero' , () => {
    // Arrange
    const num =  '4' ;
    const expected =  false ;
    // Act
    const result = IsNumeric(num);
    // Assert
    expect(result).toBe(expected); 
  } ); 
});
