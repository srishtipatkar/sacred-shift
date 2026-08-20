import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Reflections on feminine energy, boundaries, healing and balance from Coach Ujwal — writing for working women on the path from burnout to balance.",
};

export default function BlogPage() {
  return <BlogIndex />;
}
