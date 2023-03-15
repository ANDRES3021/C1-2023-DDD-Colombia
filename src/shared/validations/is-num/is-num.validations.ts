 /**
 * Verifica si el valor pasado como parámetro es un número.
 *
 * @param value Valor a validar
 * @return {boolean} true si es un número, false si no lo es
 */
 export const IsNumeric = (value: any): boolean => {
  if (typeof(value) === 'number')
    return true;
  return false;
};


