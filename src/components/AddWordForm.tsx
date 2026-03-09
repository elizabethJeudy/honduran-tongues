import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Plus } from 'lucide-react';
import { languages, categories } from '@/data/dictionaryData';

const formSchema = z.object({
  word: z.string()
    .trim()
    .min(1, { message: 'La palabra es requerida' })
    .max(200, { message: 'La palabra debe tener menos de 200 caracteres' }),
  language: z.enum(['caliche', 'lenca', 'miskito', 'garifuna', 'pech', 'tawahka', 'tolupan'], {
    required_error: 'Selecciona un idioma',
  }),
  category: z.string()
    .trim()
    .min(1, { message: 'La categoría es requerida' })
    .max(100, { message: 'La categoría debe tener menos de 100 caracteres' }),
  spanish_translation: z.string()
    .trim()
    .min(1, { message: 'La traducción al español es requerida' })
    .max(500, { message: 'La traducción debe tener menos de 500 caracteres' }),
  english_translation: z.string()
    .trim()
    .min(1, { message: 'La traducción al inglés es requerida' })
    .max(500, { message: 'La traducción debe tener menos de 500 caracteres' }),
  example: z.string()
    .trim()
    .max(500, { message: 'El ejemplo debe tener menos de 500 caracteres' })
    .optional(),
  pronunciation: z.string()
    .trim()
    .max(200, { message: 'La pronunciación debe tener menos de 200 caracteres' })
    .optional(),
  notes: z.string()
    .trim()
    .max(1000, { message: 'Las notas deben tener menos de 1000 caracteres' })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const AddWordForm = () => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      word: '',
      language: undefined,
      category: '',
      spanish_translation: '',
      english_translation: '',
      example: '',
      pronunciation: '',
      notes: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('dictionary_words')
        .insert([{
          word: values.word,
          language: values.language,
          category: values.category,
          spanish_translation: values.spanish_translation,
          english_translation: values.english_translation,
          example: values.example || null,
          pronunciation: values.pronunciation || null,
          notes: values.notes || null,
          status: 'pending',
        }]);

      if (error) throw error;

      toast.success('¡Palabra enviada! Será revisada y publicada pronto.');
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error('Error submitting word:', error);
      toast.error('Error al enviar la palabra. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Agregar Palabra
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Agregar Nueva Palabra</DialogTitle>
          <DialogDescription>
            Contribuye al diccionario agregando palabras del caliche o lenguas indígenas de Honduras. 
            Tu palabra será revisada antes de publicarse.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="word"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Palabra *</FormLabel>
                  <FormControl>
                    <Input placeholder="ej. Maje" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Idioma *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un idioma" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {languages
                        .filter(lang => lang.id !== 'all')
                        .map(lang => (
                          <SelectItem key={lang.id} value={lang.id}>
                            {lang.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Categoría *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories
                        .filter(cat => cat !== 'Todos')
                        .map(cat => (
                          <SelectItem key={cat} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="spanish_translation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traducción al Español *</FormLabel>
                  <FormControl>
                    <Input placeholder="ej. Amigo, persona, tonto" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="english_translation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Traducción al Inglés *</FormLabel>
                  <FormControl>
                    <Input placeholder="ej. Dude, guy, fool" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pronunciation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pronunciación</FormLabel>
                  <FormControl>
                    <Input placeholder="ej. MAH-heh" {...field} />
                  </FormControl>
                  <FormDescription>
                    Opcional: Cómo se pronuncia la palabra
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="example"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ejemplo de Uso</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="ej. ¿Qué onda maje?"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Opcional: Una frase de ejemplo usando la palabra
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notas Adicionales</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="ej. Puede ser amistoso o insultante según el contexto"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Opcional: Contexto cultural, historia o notas adicionales
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Palabra'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};