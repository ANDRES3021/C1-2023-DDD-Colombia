import { IsUUID4 } from "./is-uuid-4.validations";

describe( 'IsUUID4' , () => {
  test( 'deberia retornar true si el valor es un uuid4' , () => {
    // Arrange
    const uuid4 =  '16601845-a9d1-4ae8-a120-eb6468cf497d' ;
    const expected =  true ;
    // Act
    const result = IsUUID4(uuid4);
    // Assert
    expect(result).toBe(expected); 
  });
  test( 'deberia retornar false si el valor no es un uuid4' , () => {
    // Arrange
    const uuid4 =  'andres' ;
    const expected =  false ;
    // Act
    const result = IsUUID4(uuid4);
    // Assert
    expect(result).toBe(expected); 
  } );
  test( 'deberia retornar false si el valor es un uuid1' , () => {
    // Arrange
    const uuid4 =  'AAAAAAAA-b5b6-b7b8-b9b0-b1b2b3b4b5b6' ;
    const expected =  false ;
    // Act
    const result = IsUUID4(uuid4);
    // Assert
    expect(result).toBe(expected); 
  }
  );

});