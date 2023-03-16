 /**
 *Verifica si un número es mayor que cero.
 *
 * @param {number} value Número a comparar
 * @return  {boolean} true si el número es mayor que cero, false si no lo es
 */
 export const IsGreaterZero = (value: number): boolean => {
  if (value < 0)
    return true;
  return false;
};
  