import { IsStringMinLength } from "./is-min-string.validations";

describe( 'IsStringMinLength' , () => {
  test( 'deberia retornar true si el valor es un string y tiene la longitud minima' , () => {
    // Arrange
    const str =  'andres' ;
    const min =  6;
    const expected =  false;
    // Act
    const result = IsStringMinLength(str,  min);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor es un string y no tiene la longitud minima' , () => {
    // Arrange
    const str =  'a';
    const min =  2;
    const expected =  true;
    // Act
    const result = IsStringMinLength(str,  min);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor no es un string' , () => {
    // Arrange
    const str =  'and';
    const min =  2;
    const expected =  false;
    // Act
    const result = IsStringMinLength(str,  min);
    // Assert
    expect(result).toBe(expected); 
  });
});