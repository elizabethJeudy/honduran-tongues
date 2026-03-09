-- Fix security issues from linter (corrected)

-- Fix 1: Update function to have stable search_path (use CREATE OR REPLACE)
CREATE OR REPLACE FUNCTION public.update_dictionary_words_updated_at()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix 2: Make INSERT policy more restrictive
DROP POLICY IF EXISTS "Anyone can submit new words" ON public.dictionary_words;

CREATE POLICY "Anyone can submit new words"
ON public.dictionary_words
FOR INSERT
WITH CHECK (
  status = 'pending' 
  AND word IS NOT NULL 
  AND length(trim(word)) > 0
  AND length(trim(word)) <= 200
  AND language IN ('caliche', 'lenca', 'miskito', 'garifuna', 'pech', 'tawahka', 'tolupan')
  AND category IS NOT NULL
  AND length(trim(category)) > 0
  AND length(trim(category)) <= 100
  AND spanish_translation IS NOT NULL
  AND length(trim(spanish_translation)) > 0
  AND length(trim(spanish_translation)) <= 500
  AND english_translation IS NOT NULL
  AND length(trim(english_translation)) > 0
  AND length(trim(english_translation)) <= 500
);