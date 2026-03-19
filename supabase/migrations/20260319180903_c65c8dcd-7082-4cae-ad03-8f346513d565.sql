ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS sexo text,
  ADD COLUMN IF NOT EXISTS objetivos text[],
  ADD COLUMN IF NOT EXISTS valores_laboratoriais jsonb,
  ADD COLUMN IF NOT EXISTS resultados jsonb;