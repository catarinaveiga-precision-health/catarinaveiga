
-- Blog posts table
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title_pt TEXT NOT NULL,
  title_en TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt_pt TEXT,
  excerpt_en TEXT,
  content_pt TEXT,
  content_en TEXT,
  cover_image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Public read access for published posts
CREATE POLICY "Published posts are viewable by everyone"
  ON public.posts
  FOR SELECT
  USING (published = true);

-- Create index on slug for fast lookups
CREATE INDEX idx_posts_slug ON public.posts (slug);

-- Create index on created_at for ordering
CREATE INDEX idx_posts_created_at ON public.posts (created_at DESC);
