export type { DictionaryEntry } from './types';
export { calicheEntries } from './calicheData';
export { miskitoEntries, garifunaEntries, pechEntries, lencaEntries, tawahkaEntries, tolupanEntries } from './indigenousData';

import { calicheEntries } from './calicheData';
import { miskitoEntries, garifunaEntries, pechEntries, lencaEntries, tawahkaEntries, tolupanEntries } from './indigenousData';

export const dictionaryEntries = [
  ...calicheEntries,
  ...miskitoEntries,
  ...garifunaEntries,
  ...pechEntries,
  ...lencaEntries,
  ...tawahkaEntries,
  ...tolupanEntries,
];

export const languages = [
  { id: 'all', name: 'Todos', color: 'bg-muted' },
  { id: 'caliche', name: 'Caliche', color: 'bg-primary' },
  { id: 'miskito', name: 'Miskito', color: 'bg-ocean' },
  { id: 'garifuna', name: 'Garífuna', color: 'bg-secondary' },
  { id: 'pech', name: 'Pech', color: 'bg-tropical' },
  { id: 'lenca', name: 'Lenca', color: 'bg-accent' },
  { id: 'tawahka', name: 'Tawahka', color: 'bg-primary' },
  { id: 'tolupan', name: 'Tolupán', color: 'bg-secondary' },
] as const;

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
  'Dinero',
  'Confirmación',
  'Apariencia',
  'Respuestas',
  'Identidad',
  'Expresiones',
  'Emociones',
  'Trabajo',
  'Cultura',
] as const;
