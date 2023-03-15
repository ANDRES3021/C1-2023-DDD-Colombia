import { DateValueObject } from "./date.value-object";

describe('DateStartObjectValue', () => {
    describe('validaciones', () => {
      it('si le paso una fecha valida no me da error', () => {
        //Arrange
        const date = new Date(Date.now() + 24 * 60 * 60 * 1000); //fecha dentro de 24 horas
        const expected = true;
        //Act
        const objectValue = new DateValueObject(date);
        const result = objectValue.hasErrors();
        //Assert
        expect(result).toBe(expected);
      });
      it('si le paso una fecha no valida me da error', () => {
        //Arrange
        const date = new Date(Date.now() - 24 * 60 * 60 * 1000); //fecha hace 24 horas
        const expected = true;
        //Act
        const objectValue = new DateValueObject(date);
        const result = objectValue.hasErrors();
        //Assert
        expect(result).toBe(expected);
      });
      it('debe crear un objeto con fecha actual si no se proporciona una fecha', () => {
        //Arrange
        
        const expected = true;
        //Act
        const objectValue = new DateValueObject();
        const result = objectValue.hasErrors();
        //Assert
        expect(result).toBe(expected);
      });
    });
  });