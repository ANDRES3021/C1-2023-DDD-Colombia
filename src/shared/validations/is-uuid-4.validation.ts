import { validate as uuidValidate, version as uuidVersion } from 'uuid';

 /**
 * Verifica si una cadena de caracteres representa un UUID (Identificador Único Universal) de versión 4.
 *
 * @param {string} value Cadena de caracteres a validar
 * @return {boolean} true si es un UUID de versión 4, false si no lo es
 */
 export const IsUUID4 = (value: string): boolean => {
  return uuidValidate(value) && uuidVersion(value) === 4;
};