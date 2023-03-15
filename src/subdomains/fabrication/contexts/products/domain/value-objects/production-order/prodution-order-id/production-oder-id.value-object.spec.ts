import { ProductionOrderIdValueObject } from "./production-order-id.value-object";

describe( 'ProductionOrderId' , () => {
    // Arrange and Act
    let objectValue: ProductionOrderIdValueObject;
    beforeEach(() => {
        objectValue =  new  ProductionOrderIdValueObject( 'aeaf4ee9-2224-4b5e-a630-9a4e10f5161d');
    } );

    
    test('debería estar definido', () => {
        // Assert
        expect(objectValue).toBeDefined();
    });
    });
    describe('Validaciones', () => {
      test('si no le pasa un valor vacio me crea el uuid y no me da error', () => {
        // Arrange
        const UUID = '';
        const expected = true;
        // Act
        const objectValue = new ProductionOrderIdValueObject(UUID);
        const result = objectValue.hasErrors();
        // Assert
        expect(result).toBe(expected);
      });
      test('si le paso un uuid no valido me da error o de una version anterior', () => {
        // Arrange
        const UUID = '6b31be3a-c20e-11ed-afa1-0242ac120002';
        const expected = true;
        // Act
        const objectValue = new ProductionOrderIdValueObject(UUID);
        const result = objectValue.hasErrors();
        // Assert
        expect(result).toBe(expected);
      });
    });
