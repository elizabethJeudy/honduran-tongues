import { motion } from 'framer-motion';
import { Book, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DictionaryHeaderProps {
  uiLanguage: 'es' | 'en';
  onToggleLanguage: () => void;
}

export const DictionaryHeader = ({ uiLanguage, onToggleLanguage }: DictionaryHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-4 mb-8"
    >
      <div className="flex justify-end mb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onToggleLanguage}
          className="gap-2"
        >
          <Globe className="w-4 h-4" />
          {uiLanguage === 'es' ? 'English' : 'Español'}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-3">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Book className="w-10 h-10 text-primary" />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Diccionario Garífuna
        </h1>
        <motion.div
          initial={{ rotate: 10 }}
          animate={{ rotate: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Globe className="w-10 h-10 text-secondary" />
        </motion.div>
      </div>
      
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        {uiLanguage === 'es'
          ? 'Preservando la lengua Garífuna: el idioma y la herencia viva de nuestra comunidad.'
          : 'Preserving the Garífuna language: the living language and heritage of our community.'}
      </p>
    </motion.div>
  );
};
