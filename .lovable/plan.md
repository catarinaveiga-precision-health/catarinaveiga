

# Plano de Implementacao — 6 Tarefas

## 1. Paginas Legais (3 paginas)

Criar 3 novas paginas com Navbar + Footer + LegalBand, usando o sistema de traducoes PT/EN existente:

- `/aviso-legal` — Aviso Legal para prestador de servicos de saude em Portugal
- `/politica-privacidade` — Politica de Privacidade conforme RGPD
- `/termos-utilizacao` — Termos de Utilizacao

Cada pagina segue o layout da homepage (Navbar no topo, conteudo central com `max-w-4xl`, LegalBand + Footer no fundo). O conteudo legal sera texto estatico com traducoes PT/EN.

Actualizar o Footer para usar `<Link>` do react-router-dom nos 3 links legais em vez de `<a href="#">`.

**Ficheiros novos:**
- `src/pages/AvisoLegal.tsx`
- `src/pages/PoliticaPrivacidade.tsx`
- `src/pages/TermosUtilizacao.tsx`

**Ficheiros alterados:**
- `src/App.tsx` — adicionar 3 rotas
- `src/components/Footer.tsx` — substituir `href="#"` por `<Link to="...">`
- `src/contexts/LanguageContext.tsx` — adicionar traducoes para o conteudo legal

---

## 2. Sistema de Blog

Criar pagina de listagem `/blog` e template de artigo `/blog/:slug`.

Os 3 artigos placeholder ja tem conteudo nas traducoes. Vamos criar um array de dados de artigos (com slug, conteudo completo PT/EN) e duas paginas:

- `/blog` — grid de 3 colunas, mesmo estilo dos cards existentes na homepage
- `/blog/:slug` — template de artigo individual (titulo, categoria, conteudo, link para voltar)

Actualizar o componente Blog da homepage para linkar cada "Ler mais" para `/blog/:slug` e "Ver todos" para `/blog`.

**Ficheiros novos:**
- `src/data/articles.ts` — dados dos 3 artigos com slug e conteudo completo
- `src/pages/BlogPage.tsx` — listagem
- `src/pages/BlogArticle.tsx` — artigo individual

**Ficheiros alterados:**
- `src/App.tsx` — adicionar 2 rotas
- `src/components/Blog.tsx` — substituir `href="#"` por `<Link>`
- `src/contexts/LanguageContext.tsx` — adicionar traducoes dos artigos completos

---

## 3. LinkedIn

Substituir `href="#"` no Footer pelo URL real.

**Ficheiro alterado:**
- `src/components/Footer.tsx` — linha 54: `href="https://www.linkedin.com/company/catarina-veiga-medicina-funcional-integrativa/"`

---

## 4. Pagina 404 Melhorada

Adicionar Navbar, Footer, LegalBand e traducoes PT/EN a `NotFound.tsx`. Manter o estilo visual consistente com o resto do site.

**Ficheiro alterado:**
- `src/pages/NotFound.tsx`
- `src/contexts/LanguageContext.tsx` — adicionar traducoes 404

---

## 5. SEO Meta Tags

Actualizar `index.html`:
- `lang="pt"` ja existe
- Actualizar `<meta name="description">` com o texto pedido
- Adicionar `og:image` e `og:url`

**Ficheiro alterado:**
- `index.html`

---

## 6. Newsletter com Base de Dados

Criar tabela `newsletter_subscribers` com colunas `id`, `email` (unique), `created_at`. RLS aberta para INSERT anonimo (qualquer visitante pode subscrever), sem SELECT/UPDATE/DELETE publico.

Actualizar o Footer para fazer `supabase.from('newsletter_subscribers').insert()` com feedback visual (toast de sucesso/erro).

**Migracao SQL:**
```sql
CREATE TABLE public.newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON public.newsletter_subscribers
  FOR INSERT
  WITH CHECK (true);
```

**Ficheiro alterado:**
- `src/components/Footer.tsx` — importar supabase client, chamar insert, mostrar toast

---

## Resumo de Ficheiros

| Accao | Ficheiro |
|-------|---------|
| Novo | `src/pages/AvisoLegal.tsx` |
| Novo | `src/pages/PoliticaPrivacidade.tsx` |
| Novo | `src/pages/TermosUtilizacao.tsx` |
| Novo | `src/pages/BlogPage.tsx` |
| Novo | `src/pages/BlogArticle.tsx` |
| Novo | `src/data/articles.ts` |
| Alterado | `src/App.tsx` (5 novas rotas) |
| Alterado | `src/components/Footer.tsx` (links legais, LinkedIn, newsletter) |
| Alterado | `src/components/Blog.tsx` (links para /blog) |
| Alterado | `src/pages/NotFound.tsx` (Navbar + Footer + traducoes) |
| Alterado | `src/contexts/LanguageContext.tsx` (traducoes legais, blog, 404) |
| Alterado | `index.html` (meta tags SEO) |
| Migracao | Tabela `newsletter_subscribers` |

