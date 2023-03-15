import { CancelValueObject } from "./cancel.value-object";

describe('si el objeto esta definido no da error ', () => {
    test('debería estar definido', () => {
        // Arrange and Act
        const objectValue = new CancelValueObject(false);
        // Assert
        expect(objectValue).toBeDefined();
    });
});

    
    