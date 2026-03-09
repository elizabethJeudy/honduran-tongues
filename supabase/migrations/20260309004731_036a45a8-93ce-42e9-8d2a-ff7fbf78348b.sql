-- Create table for user-submitted dictionary words
CREATE TABLE public.dictionary_words (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  word TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('caliche', 'lenca', 'miskito', 'garifuna', 'pech', 'tawahka', 'tolupan')),
  category TEXT NOT NULL,
  spanish_translation TEXT NOT NULL,
  english_translation TEXT NOT NULL,
  example TEXT,
  pronunciation TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  user_id UUID,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected'))
);

-- Enable Row Level Security
ALTER TABLE public.dictionary_words ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can view approved words
CREATE POLICY "Anyone can view approved words"
ON public.dictionary_words
FOR SELECT
USING (status = 'approved');

-- Policy: Anyone can insert new words (they start as pending)
CREATE POLICY "Anyone can submit new words"
ON public.dictionary_words
FOR INSERT
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_dictionary_words_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_dictionary_words_updated_at
BEFORE UPDATE ON public.dictionary_words
FOR EACH ROW
EXECUTE FUNCTION public.update_dictionary_words_updated_at();

-- Create index for faster queries
CREATE INDEX idx_dictionary_words_status ON public.dictionary_words(status);
CREATE INDEX idx_dictionary_words_language ON public.dictionary_words(language);
CREATE INDEX idx_dictionary_words_category ON public.dictionary_words(category);