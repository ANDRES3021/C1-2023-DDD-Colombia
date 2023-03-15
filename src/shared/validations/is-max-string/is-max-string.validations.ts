 /**
 * Verifica si una cadena de caracteres excede la longitud máxima especificada.
 *
 * @param {string} value Cadena de caracteres a validar
 * @param {number} max Longitud máxima
 * @return  {boolean} true si excede la longitud máxima, false si no lo hace
 */
 export const IsStringMaxLength = (value: string, max: number): boolean => {
    return value.length > max ? true : false;
  };
  