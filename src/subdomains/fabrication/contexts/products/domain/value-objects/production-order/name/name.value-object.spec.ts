import { NameProductionOrderValueObject } from "./name.value-object";

describe('NameProductionOrderValueObject', () => {
    // Arrange and Act
    let objectValue: NameProductionOrderValueObject;
    beforeEach(() => {
        objectValue =  new  NameProductionOrderValueObject( 'Orden de producción 1' );
    } );
    test('debería estar definido', () => {
        // Assert
        expect(objectValue).toBeDefined();
    });
    describe('Validaciones', () => {
        test('si  le paso un valor vacio me da error', () => {
            // Arrange
            const name = ' ';
            const expected = true;
            // Act
            const objectValue =  new  NameProductionOrderValueObject(name);
            const result = objectValue.hasErrors();
            // Assert
            expect(result).toBe(expected);
        });
    describe('si le paso un nombre bien no me da error ', () => {
        test('si le paso un nombre de orden de producción no valido me da error', () => {
            // Arrange
            const name = 'Orden de producción 1' ;
            const expected = false;
            // Act
            const objectValue =  new  NameProductionOrderValueObject(name);
            const result = objectValue.hasErrors();
            // Assert
            expect(result).toBe(expected);
        });
    });
    describe ('si le paso un nombre con longitud mayor a la maxima me da error', () => {
        // Arrange
        test ('si le paso un nombre con longitud mayor a la maxima me da error', () => {
        const name = 'Total Pack: La solución completa para la vida en movimiento. Una colección de ropa y accesorios de alta calidad diseñada para acompañarte en todas tus aventuras, desde la ciudad hasta la naturaleza. Total Pack ofrece todo lo que necesitas para una vida activa y dinámica, con mochilas ergonómicas, ropa cómoda y resistente, calzado deportivo de alta tecnología, y mucho más. Cada producto es creado con materiales resistentes y duraderos, y diseñado para satisfacer las necesidades de los viajeros modernos y los amantes de la vida al aire libre. ¡Explora el mundo con Total Pack de Totto!' ;
        const expected = true;
        // Act
        const objectValue =  new  NameProductionOrderValueObject(name);
        const result = objectValue.hasErrors();
        // Assert
        expect(result).toBe(expected);
        });
    
    });
    describe('si le paso un nombre con una longitud menor a la minima me da error', () => {
        // Arrange
        test('si le paso un nombre con una longitud menor a la minima me da error', () => {
            // Arrange
            const name = 'Tot' ;
            const expected = true;
            // Act
            const objectValue =  new  NameProductionOrderValueObject(name);
            const result = objectValue.hasErrors();
            // Assert
            expect(result).toBe(expected);
        });
    });
});
});
