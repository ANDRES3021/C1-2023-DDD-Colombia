 /**
 * Verifica si una cadena de caracteres tiene una longitud menor que la mínima especificada.
 *
 *
 * @param {string} value
 * @param {number} min
 * @return {*}  {boolean}
 */
 export const StringMinLength = (value: string, min: number): boolean => {
    return value.length < min ? true : false;
  };
