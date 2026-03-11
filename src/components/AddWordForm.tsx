import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,
} from '@/components/ui/form';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { categories } from '@/data/dictionaryData';

const formSchema = z.object({
  word: z.string().trim().min(1, 'La palabra es requerida').max(200),
  category: z.string().trim().min(1, 'La categoría es requerida').max(100),
  spanish_translation: z.string().trim().min(1, 'La traducción al español es requerida').max(500),
  english_translation: z.string().trim().min(1, 'La traducción al inglés es requerida').max(500),
  example: z.string().trim().max(500).optional(),
  pronunciation: z.string().trim().max(200).optional(),
  notes: z.string().trim().max(1000).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface AddWordFormProps {
  uiLanguage: 'es' | 'en';
}

export const AddWordForm = ({ uiLanguage }: AddWordFormProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSpanish = uiLanguage === 'es';

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: '', category: '', spanish_translation: '', english_translation: '',
      example: '', pronunciation: '', notes: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('dictionary_words')
        .insert([{
          word: values.word,
          language: 'garifuna',
          category: values.category,
          spanish_translation: values.spanish_translation,
          english_translation: values.english_translation,
          example: values.example || null,
          pronunciation: values.pronunciation || null,
          notes: values.notes || null,
          status: 'pending',
        }]);

      if (error) throw error;
      toast.success(isSpanish ? '¡Palabra enviada! Será revisada pronto.' : 'Word submitted! It will be reviewed soon.');
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error submitting word:', error);
      toast.error(isSpanish ? 'Error al enviar la palabra.' : 'Error submitting word.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          {isSpanish ? 'Agregar Palabra' : 'Add Word'}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isSpanish ? 'Agregar Nueva Palabra Garífuna' : 'Add New Garífuna Word'}</DialogTitle>
          <DialogDescription>
            {isSpanish
              ? 'Contribuye al diccionario agregando palabras en Garífuna. Tu palabra será revisada antes de publicarse.'
              : 'Contribute to the dictionary by adding Garífuna words. Your word will be reviewed before publishing.'}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField control={form.control} name="word" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Palabra' : 'Word'} *</FormLabel>
                <FormControl><Input placeholder="ej. Buiti binafi" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="category" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Categoría' : 'Category'} *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger><SelectValue placeholder={isSpanish ? 'Selecciona una categoría' : 'Select a category'} /></SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.filter(cat => cat !== 'Todos').map(cat => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="spanish_translation" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Traducción al Español' : 'Spanish Translation'} *</FormLabel>
                <FormControl><Input placeholder="ej. Buenos días" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="english_translation" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Traducción al Inglés' : 'English Translation'} *</FormLabel>
                <FormControl><Input placeholder="e.g. Good morning" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="pronunciation" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Pronunciación' : 'Pronunciation'}</FormLabel>
                <FormControl><Input placeholder="ej. BWEE-tee bee-NAH-fee" {...field} /></FormControl>
                <FormDescription>{isSpanish ? 'Opcional' : 'Optional'}</FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="example" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Ejemplo de Uso' : 'Usage Example'}</FormLabel>
                <FormControl><Textarea placeholder={isSpanish ? 'Ejemplo de uso...' : 'Usage example...'} className="resize-none" {...field} /></FormControl>
                <FormDescription>{isSpanish ? 'Opcional' : 'Optional'}</FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <FormField control={form.control} name="notes" render={({ field }) => (
              <FormItem>
                <FormLabel>{isSpanish ? 'Notas Adicionales' : 'Additional Notes'}</FormLabel>
                <FormControl><Textarea placeholder={isSpanish ? 'Contexto cultural, historia...' : 'Cultural context, history...'} className="resize-none" {...field} /></FormControl>
                <FormDescription>{isSpanish ? 'Opcional' : 'Optional'}</FormDescription>
                <FormMessage />
              </FormItem>
            )} />

            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isSubmitting}>
                {isSpanish ? 'Cancelar' : 'Cancel'}
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (isSpanish ? 'Enviando...' : 'Submitting...') : (isSpanish ? 'Enviar Palabra' : 'Submit Word')}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
