 /**
 * Verifica si una cadena de caracteres tiene una longitud menor que la mínima especificada.
 *
 *
 * @param {string} value Cadena de caracteres a validar
 * @param {number} min Longitud mínima
 * @return {boolean} true si tiene una longitud menor que la mínima especificada, false si no lo hace
 */
 export const StringMinLength = (value: string, min: number): boolean => {
    return value.length < min ? true : false;
  };
