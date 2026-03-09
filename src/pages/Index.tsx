import { useState, useMemo, useEffect } from 'react';
import { DictionaryHeader } from '@/components/DictionaryHeader';
import { SearchBar } from '@/components/SearchBar';
import { LanguageFilter } from '@/components/LanguageFilter';
import { DictionaryCard } from '@/components/DictionaryCard';
import { AddWordForm } from '@/components/AddWordForm';
import { dictionaryEntries } from '@/data/dictionaryData';
import { DictionaryEntry } from '@/data/types';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [userWords, setUserWords] = useState<DictionaryEntry[]>([]);

  useEffect(() => {
    fetchUserWords();
  }, []);

  const fetchUserWords = async () => {
    const { data, error } = await supabase
      .from('dictionary_words')
      .select('*')
      .eq('status', 'approved');

    if (error) {
      console.error('Error fetching user words:', error);
      return;
    }

    if (data) {
      const formattedWords: DictionaryEntry[] = data.map(word => ({
        id: word.id,
        word: word.word,
        language: word.language as DictionaryEntry['language'],
        category: word.category,
        spanishTranslation: word.spanish_translation,
        englishTranslation: word.english_translation,
        example: word.example || undefined,
        pronunciation: word.pronunciation || undefined,
        notes: word.notes || undefined,
      }));
      setUserWords(formattedWords);
    }
  };

  const allEntries = useMemo(() => {
    return [...dictionaryEntries, ...userWords];
  }, [userWords]);

  const filteredEntries = useMemo(() => {
    return allEntries.filter(entry => {
      const matchesLanguage = selectedLanguage === 'all' || entry.language === selectedLanguage;
      
      if (!matchesLanguage) return false;
      
      if (!searchQuery) return true;
      
      const query = searchQuery.toLowerCase();
      return (
        entry.word.toLowerCase().includes(query) ||
        entry.spanishTranslation.toLowerCase().includes(query) ||
        entry.englishTranslation.toLowerCase().includes(query) ||
        entry.category.toLowerCase().includes(query) ||
        (entry.example && entry.example.toLowerCase().includes(query)) ||
        (entry.notes && entry.notes.toLowerCase().includes(query))
      );
    });
  }, [searchQuery, selectedLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <DictionaryHeader />
        
        <div className="space-y-6 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <LanguageFilter selected={selectedLanguage} onSelect={setSelectedLanguage} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-center text-muted-foreground"
        >
          {filteredEntries.length} {filteredEntries.length === 1 ? 'palabra encontrada' : 'palabras encontradas'}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry, index) => (
            <DictionaryCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-muted-foreground">
              No se encontraron palabras. Intenta otra búsqueda.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
