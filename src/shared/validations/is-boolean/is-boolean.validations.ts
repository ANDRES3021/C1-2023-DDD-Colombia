 
 /**
  *
  *
  * @param  value valor a validar
  * @return {boolean} true si es booleano, false si no lo es
  */
 export const IsBoolean = (value: any): boolean => {
    if (typeof value === 'boolean') {
      return true;
    }
    return false;
  };