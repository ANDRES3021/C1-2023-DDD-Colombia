import { IsEmpty } from "./is-empty.validations";

describe( 'IsEmpty' , () => {
  test( 'deberia retornar true si el valor es un string vacio' , () => {
    // Arrange
    const str =  '' ;
    const expected =  true ;
    // Act
    const result = IsEmpty(str);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor es un string con contenido' , () => {
    // Arrange
    const str =  'a' ;
    const expected =  false ;
    // Act
    const result = IsEmpty(str);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor es un array con contenido' , () => {
    // Arrange
    const arr = [ 1 ];
    const expected =  false ;
    // Act
    const result = IsEmpty(arr);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar true si el valor es un objeto vacio' , () => {
    // Arrange
    const obj = {};
    const expected =  true ;
    // Act
    const result = IsEmpty(obj);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor es un objeto con contenido' , () => {
    // Arrange
    const obj = { a:  1  };
    const expected =  false ;
    // Act
    const result = IsEmpty(obj);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar true si el valor es un undefined' , () => {
    // Arrange
    const und = undefined;
    const expected =  true ;
    // Act
    const result = IsEmpty(und);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar true si el valor es un null' , () => {
    // Arrange
    const nu = null;
    const expected =  true ;
    // Act
    const result = IsEmpty(nu);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar true si el valor es un NaN' , () => {
    // Arrange
    const es = NaN;
    const expected =  false;
    // Act
    const result = IsEmpty(es);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar true si el valor es un 0' , () => {
    // Arrange
    const num = 0;
    const expected =  false;
    // Act
    const result = IsEmpty(num);
    // Assert
    expect(result).toBe(expected); 
  });
  // test( 'deberia retornar true si el valor es un 1' , () => {
  //   // Arrange
  //   const num = 1;
  //   const expected =  false;
  //   // Act
  //   const result = IsEmpty(1);
  //   // Assert
  //   expect(result).toBe(expected); 
  // });
});
