export type DictionaryEntry = {
  id: string;
  word: string;
  language: 'garifuna';
  category: string;
  spanishTranslation: string;
  englishTranslation: string;
  example?: string;
  pronunciation?: string;
  notes?: string;
};
