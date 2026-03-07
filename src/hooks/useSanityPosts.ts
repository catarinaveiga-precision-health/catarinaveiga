import { useQuery } from "@tanstack/react-query";
import {
  sanityQuery,
  ALL_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  CATEGORIES_QUERY,
  type SanityPost,
} from "@/lib/sanity";

export const useSanityPosts = () =>
  useQuery<SanityPost[]>({
    queryKey: ["sanity-posts"],
    queryFn: () => sanityQuery<SanityPost[]>(ALL_POSTS_QUERY),
  });

export const useSanityPost = (slug: string) =>
  useQuery<SanityPost | null>({
    queryKey: ["sanity-post", slug],
    queryFn: () => sanityQuery<SanityPost>(POST_BY_SLUG_QUERY, { slug }),
    enabled: !!slug,
  });

export const useSanityCategories = () =>
  useQuery<string[]>({
    queryKey: ["sanity-categories"],
    queryFn: () => sanityQuery<string[]>(CATEGORIES_QUERY),
  });
