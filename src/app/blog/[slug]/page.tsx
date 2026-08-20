import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-ivory pt-32 pb-28 md:pt-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Link href="/blog" className="focus-ring label text-violet hover:text-gold">
          &larr; The Journal
        </Link>

        <p className="label mt-8 text-gold">{post.category}</p>
        <h1 className="font-display mt-4 text-5xl leading-tight text-plum md:text-6xl">{post.title}</h1>
        <p className="mt-4 text-sm text-charcoal/50">
          {post.author} &middot;{" "}
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div
          className="mt-10 aspect-[16/9]"
          style={{ backgroundImage: "linear-gradient(135deg,#7D5B74,#4A2A3B)" }}
        />

        <div className="prose prose-lg mt-12 max-w-none space-y-6 text-charcoal/75">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
