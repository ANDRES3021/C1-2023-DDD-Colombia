 /**
 * Verifica si una cadena de caracteres excede la longitud máxima especificada.
 *
 * @param {string} value
 * @param {number} max
 * @return {*}  {boolean}
 */
 export const StringMaxLength = (value: string, max: number): boolean => {
    return value.length > max ? true : false;
  };
  