import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DictionaryEntry } from '@/data/dictionaryData';
import { MessageSquare, Volume2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

interface DictionaryCardProps {
  entry: DictionaryEntry;
  index: number;
  uiLanguage: 'es' | 'en';
}

export const DictionaryCard = ({ entry, index, uiLanguage }: DictionaryCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const isSpanish = uiLanguage === 'es';

  const playPronunciation = async () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/text-to-speech`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ text: entry.word }),
        }
      );

      if (!response.ok) throw new Error('Failed to generate audio');

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.onended = () => { setIsPlaying(false); URL.revokeObjectURL(audioUrl); };
      await audio.play();
    } catch (error) {
      console.error('Error playing pronunciation:', error);
      toast.error(isSpanish ? 'Error al reproducir' : 'Failed to play pronunciation');
      setIsPlaying(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card className="hover:shadow-lg transition-shadow border-2">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <CardTitle className="text-2xl font-bold text-primary">
                {entry.word}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={playPronunciation}
                disabled={isPlaying}
              >
                <Volume2 className={`w-4 h-4 ${isPlaying ? 'text-primary animate-pulse' : ''}`} />
              </Button>
            </div>
            <Badge className="bg-secondary text-secondary-foreground">
              Garífuna
            </Badge>
          </div>
          {entry.pronunciation && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
                    {isSpanish ? 'Ejemplo:' : 'Example:'}
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
              <span className="font-semibold">{isSpanish ? 'Nota:' : 'Note:'}</span> {entry.notes}
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
