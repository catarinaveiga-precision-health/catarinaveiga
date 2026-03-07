CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  idade integer,
  pais text,
  sintomas text[] DEFAULT '{}',
  duracao_sintomas text,
  historico_tratamentos text,
  diagnosticos text,
  rgpd_aceite boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an application"
  ON public.applications
  FOR INSERT
  WITH CHECK (true);