
CREATE TABLE public.leads_avaliacao (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  nome text,
  email text,
  idade int,
  sexo text,
  objetivos text[],
  valores_laboratoriais jsonb,
  resultados jsonb
);

ALTER TABLE public.leads_avaliacao ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads_avaliacao"
  ON public.leads_avaliacao
  FOR INSERT
  WITH CHECK (true);

CREATE TABLE public.leads_candidatura (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  nome text,
  email text,
  telefone text,
  sintomas text[],
  historico text,
  objetivos text,
  informacao_adicional text
);

ALTER TABLE public.leads_candidatura ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads_candidatura"
  ON public.leads_candidatura
  FOR INSERT
  WITH CHECK (true);
