import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DictionaryEntry, languages } from '@/data/dictionaryData';
import { MessageSquare, Volume2 } from 'lucide-react';

interface DictionaryCardProps {
  entry: DictionaryEntry;
  index: number;
}

export const DictionaryCard = ({ entry, index }: DictionaryCardProps) => {
  const languageInfo = languages.find(l => l.id === entry.language);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-shadow border-2">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-2xl font-bold text-primary">
              {entry.word}
            </CardTitle>
            <Badge className={`${languageInfo?.color} text-white`}>
              {languageInfo?.name}
            </Badge>
          </div>
          {entry.pronunciation && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Volume2 className="w-4 h-4" />
              <span className="italic">{entry.pronunciation}</span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">
              Español:
            </p>
            <p className="text-foreground">{entry.spanishTranslation}</p>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-1">
              English:
            </p>
            <p className="text-foreground">{entry.englishTranslation}</p>
          </div>
          
          {entry.example && (
            <div className="pt-2 border-t">
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-muted-foreground">
                    Ejemplo:
                  </p>
                  <p className="text-sm italic text-foreground">
                    "{entry.example}"
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {entry.notes && (
            <div className="text-sm text-muted-foreground bg-muted p-2 rounded">
              <span className="font-semibold">Nota:</span> {entry.notes}
            </div>
          )}
          
          <Badge variant="outline" className="text-xs">
            {entry.category}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
};
