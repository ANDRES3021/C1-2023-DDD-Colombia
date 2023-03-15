import { IsStringMaxLength } from "./is-max-string.validations";


describe( 'IsStringMaxLength' , () => {
  test( 'deberia retornar true si el valor es un string y tiene la longitud minima' , () => {
    // Arrange
    const str =  'andres' ;
    const max =  6;
    const expected =  false;
    // Act
    const result = IsStringMaxLength(str,  max);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor es un string y no tiene la longitud minima' , () => {
    // Arrange
    const str =  'an';
    const max =  2;
    const expected =  false;
    // Act
    const result = IsStringMaxLength(str,  max);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor no es un string' , () => {
    // Arrange
    const str =  'and';
    const max =  2;
    const expected =  true;
    // Act
    const result = IsStringMaxLength(str,  max);
    // Assert
    expect(result).toBe(expected); 
  });
}

)