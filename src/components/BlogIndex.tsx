"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { cn } from "@/lib/cn";

export default function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [featured, ...rest] = blogPosts;

  const filtered = useMemo(() => {
    return rest.filter((post) => {
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !category || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, rest]);

  return (
    <div className="bg-ivory pt-32 pb-28 md:pt-40">
      <header className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="label text-gold">The Journal</p>
        <h1 className="font-display mt-4 text-6xl text-plum md:text-7xl">From the Journal</h1>
        <p className="mt-4 max-w-lg text-charcoal/60">
          Reflections on feminine energy, boundaries, healing and balance — for working women coming back to
          themselves.
        </p>
      </header>

      {featured && (
        <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="focus-ring group grid gap-8 border border-gold/25 bg-white/40 p-8 md:grid-cols-2 md:items-center"
          >
            <div className="aspect-[4/3]" style={{ backgroundImage: "linear-gradient(135deg,#7D5B74,#4A2A3B)" }} />
            <div>
              <p className="label text-gold">Featured &middot; {featured.category}</p>
              <h2 className="font-display mt-3 text-4xl text-plum transition-colors group-hover:text-violet">
                {featured.title}
              </h2>
              <p className="mt-3 text-charcoal/60">{featured.excerpt}</p>
            </div>
          </Link>
        </section>
      )}

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory(null)}
              className={cn(
                "label rounded-full border px-4 py-2 transition-colors",
                !category ? "border-gold bg-gold text-plum" : "border-violet/25 text-violet hover:border-gold"
              )}
            >
              All
            </button>
            {blogCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "label rounded-full border px-4 py-2 transition-colors",
                  category === c ? "border-gold bg-gold text-plum" : "border-violet/25 text-violet hover:border-gold"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <label className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-violet/50" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="focus-ring w-full rounded-full border border-violet/25 bg-white/60 py-2.5 pl-9 pr-4 text-sm text-charcoal placeholder:text-charcoal/40 sm:w-64"
            />
          </label>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="focus-ring group block">
              <div className="aspect-[4/3]" style={{ backgroundImage: "linear-gradient(135deg,#8B5D78,#4A2A3B)" }} />
              <p className="label mt-5 text-gold">{post.category}</p>
              <h3 className="font-display mt-2 text-2xl text-plum transition-colors group-hover:text-violet">
                {post.title}
              </h3>
              <p className="mt-2 text-base text-charcoal/55">{post.excerpt}</p>
            </Link>
          ))}
          {filtered.length === 0 && <p className="text-charcoal/50">No articles match your search yet.</p>}
        </div>
      </section>
    </div>
  );
}
