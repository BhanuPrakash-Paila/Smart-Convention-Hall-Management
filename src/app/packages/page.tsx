import { packages } from "@/lib/data";

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Packages</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Flexible packages for every celebration.</h1>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.name} className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
              <h2 className="text-2xl font-semibold">{pkg.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-400">{pkg.description}</p>
              <p className="mt-5 text-3xl font-semibold text-cyan-300">₹{pkg.price.toLocaleString()}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                {pkg.highlights.map((item) => (
                  <li key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
