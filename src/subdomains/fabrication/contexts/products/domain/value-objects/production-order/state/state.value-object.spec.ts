import { StateValueObject } from "./state.value-object";

describe('si el objeto esta definido no da error ', () => {
    test('debería estar definido', () => {
        // Arrange and Act
        const objectValue = new StateValueObject(false);
        // Assert
        expect(objectValue).toBeDefined();
    });
});