export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-ivory pt-32 pb-28 md:pt-40">
      <div className="mx-auto max-w-2xl px-6 lg:px-10">
        <p className="label text-gold">The Sacred Shift</p>
        <h1 className="font-display mt-4 text-5xl text-plum">{title}</h1>
        <div className="prose prose-lg mt-10 space-y-4 text-charcoal/70">{children}</div>
      </div>
    </div>
  );
}
