export type DictionaryEntry = {
  id: string;
  word: string;
  language: 'caliche' | 'lenca' | 'miskito' | 'garifuna' | 'pech' | 'tawahka' | 'tolupan';
  category: string;
  spanishTranslation: string;
  englishTranslation: string;
  example?: string;
  pronunciation?: string;
  notes?: string;
};

export const dictionaryEntries: DictionaryEntry[] = [
  // Caliche (Honduran Spanish slang)
  {
    id: 'c1',
    word: 'Chele/a',
    language: 'caliche',
    category: 'Apariencia',
    spanishTranslation: 'Persona de piel blanca o cabello rubio',
    englishTranslation: 'Fair-skinned or blonde person',
    example: '¡Mirá ese chele!',
    notes: 'Very common term in Honduras'
  },
  {
    id: 'c2',
    word: 'Chunche',
    language: 'caliche',
    category: 'Objetos',
    spanishTranslation: 'Cosa, objeto',
    englishTranslation: 'Thing, object',
    example: 'Pasáme ese chunche',
    notes: 'Used when you don\'t know the name of something'
  },
  {
    id: 'c3',
    word: 'Maje',
    language: 'caliche',
    category: 'Personas',
    spanishTranslation: 'Amigo, persona, tonto',
    englishTranslation: 'Dude, guy, fool',
    example: '¿Qué onda maje?',
    notes: 'Context-dependent: can be friendly or insulting'
  },
  {
    id: 'c4',
    word: 'Pisto',
    language: 'caliche',
    category: 'Dinero',
    spanishTranslation: 'Dinero',
    englishTranslation: 'Money',
    example: 'No tengo pisto',
    notes: 'Common across Central America'
  },
  {
    id: 'c5',
    word: 'Cabal',
    language: 'caliche',
    category: 'Confirmación',
    spanishTranslation: 'Exacto, correcto',
    englishTranslation: 'Exactly, correct',
    example: '¡Cabal! Eso es lo que digo',
    notes: 'Used to agree strongly'
  },
  {
    id: 'c6',
    word: 'Cheque',
    language: 'caliche',
    category: 'Confirmación',
    spanishTranslation: 'Está bien, de acuerdo',
    englishTranslation: 'Okay, alright',
    example: 'Cheque, nos vemos mañana',
    notes: 'From English "check"'
  },
  {
    id: 'c7',
    word: 'Cachimbazo',
    language: 'caliche',
    category: 'Acciones',
    spanishTranslation: 'Golpe fuerte',
    englishTranslation: 'Strong hit, punch',
    example: 'Se dio un cachimbazo en la cabeza',
  },
  {
    id: 'c8',
    word: 'Cipote/a',
    language: 'caliche',
    category: 'Personas',
    spanishTranslation: 'Niño/a',
    englishTranslation: 'Kid, child',
    example: 'Ese cipote es muy travieso',
  },
  {
    id: 'c9',
    word: 'Birria',
    language: 'caliche',
    category: 'Comida',
    spanishTranslation: 'Cerveza',
    englishTranslation: 'Beer',
    example: 'Vamos por unas birrias',
  },
  {
    id: 'c10',
    word: 'Guaro',
    language: 'caliche',
    category: 'Comida',
    spanishTranslation: 'Aguardiente, licor fuerte',
    englishTranslation: 'Strong liquor, moonshine',
    example: 'Tomamos guaro toda la noche',
  },

  // Miskito language
  {
    id: 'm1',
    word: 'Naksa',
    language: 'miskito',
    category: 'Saludos',
    spanishTranslation: 'Gracias',
    englishTranslation: 'Thank you',
    pronunciation: 'NAHK-sah',
  },
  {
    id: 'm2',
    word: 'Yamni',
    language: 'miskito',
    category: 'Saludos',
    spanishTranslation: 'Hola',
    englishTranslation: 'Hello',
    pronunciation: 'YAHM-nee',
  },
  {
    id: 'm3',
    word: 'Laya',
    language: 'miskito',
    category: 'Familia',
    spanishTranslation: 'Madre',
    englishTranslation: 'Mother',
    pronunciation: 'LAH-yah',
  },
  {
    id: 'm4',
    word: 'Aisak',
    language: 'miskito',
    category: 'Familia',
    spanishTranslation: 'Padre',
    englishTranslation: 'Father',
    pronunciation: 'AY-sahk',
  },
  {
    id: 'm5',
    word: 'Li',
    language: 'miskito',
    category: 'Naturaleza',
    spanishTranslation: 'Agua',
    englishTranslation: 'Water',
    pronunciation: 'LEE',
  },

  // Garifuna language
  {
    id: 'g1',
    word: 'Buiti binafi',
    language: 'garifuna',
    category: 'Saludos',
    spanishTranslation: 'Buenos días',
    englishTranslation: 'Good morning',
    pronunciation: 'BWEE-tee bee-NAH-fee',
  },
  {
    id: 'g2',
    word: 'Seremein',
    language: 'garifuna',
    category: 'Despedidas',
    spanishTranslation: 'Adiós',
    englishTranslation: 'Goodbye',
    pronunciation: 'seh-reh-MAYN',
  },
  {
    id: 'g3',
    word: 'Ayó',
    language: 'garifuna',
    category: 'Respuestas',
    spanishTranslation: 'Sí',
    englishTranslation: 'Yes',
    pronunciation: 'ah-YOH',
  },
  {
    id: 'g4',
    word: 'Mábüiga',
    language: 'garifuna',
    category: 'Familia',
    spanishTranslation: 'Madre',
    englishTranslation: 'Mother',
    pronunciation: 'mah-BWEE-gah',
  },
  {
    id: 'g5',
    word: 'Úndürü',
    language: 'garifuna',
    category: 'Naturaleza',
    spanishTranslation: 'Sol',
    englishTranslation: 'Sun',
    pronunciation: 'OON-doo-roo',
  },

  // Pech language
  {
    id: 'p1',
    word: 'Yataka',
    language: 'pech',
    category: 'Naturaleza',
    spanishTranslation: 'Río',
    englishTranslation: 'River',
  },
  {
    id: 'p2',
    word: 'Kua',
    language: 'pech',
    category: 'Familia',
    spanishTranslation: 'Madre',
    englishTranslation: 'Mother',
  },
  {
    id: 'p3',
    word: 'Ama',
    language: 'pech',
    category: 'Familia',
    spanishTranslation: 'Padre',
    englishTranslation: 'Father',
  },

  // Lenca (limited documentation available)
  {
    id: 'l1',
    word: 'Lenca',
    language: 'lenca',
    category: 'Identidad',
    spanishTranslation: 'Persona del pueblo Lenca',
    englishTranslation: 'Lenca person',
    notes: 'The Lenca language is nearly extinct with few documented words'
  },

  // Tawahka
  {
    id: 't1',
    word: 'Yapti',
    language: 'tawahka',
    category: 'Naturaleza',
    spanishTranslation: 'Montaña',
    englishTranslation: 'Mountain',
  },
  {
    id: 't2',
    word: 'Baku',
    language: 'tawahka',
    category: 'Naturaleza',
    spanishTranslation: 'Árbol',
    englishTranslation: 'Tree',
  },

  // Tolupan
  {
    id: 'to1',
    word: 'Torrupan',
    language: 'tolupan',
    category: 'Identidad',
    spanishTranslation: 'Persona del pueblo Tolupán',
    englishTranslation: 'Tolupan person',
  },
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
] as const;
