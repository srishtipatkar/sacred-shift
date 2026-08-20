export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string[];
  author: string;
}

export const blogCategories = ["Feminine Energy", "Boundaries", "Healing", "Balance"];

export const blogPosts: BlogPost[] = [
  {
    title: "[Article Title Placeholder]",
    slug: "coming-back-to-yourself",
    category: "Feminine Energy",
    date: "2026-07-01",
    excerpt: "[Article excerpt placeholder — replace with real journal content.]",
    coverImage: "/images/blog/placeholder-1.jpg",
    content: ["[Full article content placeholder. Replace with real writing from Coach Ujwal.]"],
    author: "Coach Ujwal",
  },
  {
    title: "[Article Title Placeholder]",
    slug: "the-quiet-cost-of-overgiving",
    category: "Boundaries",
    date: "2026-06-15",
    excerpt: "[Article excerpt placeholder — replace with real journal content.]",
    coverImage: "/images/blog/placeholder-2.jpg",
    content: ["[Full article content placeholder. Replace with real writing from Coach Ujwal.]"],
    author: "Coach Ujwal",
  },
  {
    title: "[Article Title Placeholder]",
    slug: "learning-to-receive",
    category: "Healing",
    date: "2026-05-28",
    excerpt: "[Article excerpt placeholder — replace with real journal content.]",
    coverImage: "/images/blog/placeholder-3.jpg",
    content: ["[Full article content placeholder. Replace with real writing from Coach Ujwal.]"],
    author: "Coach Ujwal",
  },
  {
    title: "[Article Title Placeholder]",
    slug: "strength-and-softness",
    category: "Balance",
    date: "2026-05-10",
    excerpt: "[Article excerpt placeholder — replace with real journal content.]",
    coverImage: "/images/blog/placeholder-4.jpg",
    content: ["[Full article content placeholder. Replace with real writing from Coach Ujwal.]"],
    author: "Coach Ujwal",
  },
];
