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
