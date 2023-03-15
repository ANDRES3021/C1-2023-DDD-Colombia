/**
 *Verifica si una fecha es mayor o igual a la fecha actual.
 *
 * @param {Date} value Fecha a comparar
 * @return {boolean} true si la fecha es mayor o igual a la fecha actual, false si no lo es
 */
export const IsDategreatertoday = (value: Date): boolean => {
  if (new Date(Date.now()) <= value) {
    return true;
  }
  return false;
};
