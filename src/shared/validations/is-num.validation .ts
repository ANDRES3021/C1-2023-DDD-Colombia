 /**
 * Verifica si el valor pasado como parámetro es un número.
 *
 * @param {*} value
 * @return {*}  {boolean}
 */
 export const isNumeric = (value: any): boolean => {
  if (typeof(value) === 'number')
    return true;
  return false;
};


