 /**
 *Verifica si un valor es vacío o nulo.
 *
 * @param {(boolean | string | number | bigint | [] | object | null | undefined)} value Valor a validar
 * @return  {boolean} true si es vacío o nulo, false si no lo es
 */
 export const IsEmpty = (
    value: boolean | string | number | bigint | [] | object | null | undefined,
  ): boolean => {
    if (typeof value === 'string') return value.trim() === '' ? true : false;
    else if (value === null || value === undefined) return true;
    else if (typeof value === 'object')
      return Object.keys(value).length === 0 ? true : false;
    return false;
  };
  