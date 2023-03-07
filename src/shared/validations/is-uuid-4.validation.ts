import { validate as uuidValidate, version as uuidVersion } from 'uuid';

 /**
 * Verifica si una cadena de caracteres representa un UUID (Identificador Único Universal) de versión 4.
 *
 * @param {string} value
 * @return {*}  {boolean}
 */
 export const IsUUID4 = (value: string): boolean => {
  return uuidValidate(value) && uuidVersion(value) === 4;
};