import { readContentDir } from "./content";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
};

export const POSTS: Post[] = readContentDir<Post>("blog").sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
