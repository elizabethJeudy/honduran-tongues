import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { languages } from '@/data/dictionaryData';

interface LanguageFilterProps {
  selected: string;
  onSelect: (language: string) => void;
}

export const LanguageFilter = ({ selected, onSelect }: LanguageFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {languages.map((lang, index) => {
        const isSelected = selected === lang.id;
        return (
          <motion.div
            key={lang.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Button
              variant={isSelected ? 'default' : 'outline'}
              onClick={() => onSelect(lang.id)}
              className={isSelected ? lang.color : ''}
            >
              {lang.name}
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
};
