export type { DictionaryEntry } from './types';
export { garifunaEntries } from './garifunaData';

import { garifunaEntries } from './garifunaData';

export const dictionaryEntries = [...garifunaEntries];

export const categories = [
  'Todos',
  'Saludos',
  'Despedidas',
  'Familia',
  'Comida',
  'Naturaleza',
  'Personas',
  'Objetos',
  'Acciones',
  'Expresiones',
  'Emociones',
  'Respuestas',
  'Cultura',
] as const;
