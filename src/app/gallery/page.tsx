import { galleryItems } from "@/lib/data";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">See the elegance of our event spaces.</h1>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-semibold">{item.title}</h2>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
