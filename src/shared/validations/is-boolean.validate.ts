 /**
 *
 *Verifica si un valor es de tipo booleano.
 * @param {*} value
 * @return {*}  {boolean}
 */
 export const isBoolean = (value: any): boolean => {
    if (typeof(value) === 'boolean') {
      return true;
    }
    return false;
  };