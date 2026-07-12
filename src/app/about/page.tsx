import { hallFeatures, stats } from "@/lib/data";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About Our Hall
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Trusted by families and businesses for memorable events.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            We combine premium facilities, warm hospitality, and modern booking
            technology to make every celebration smooth from planning to
            execution.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold">Why choose us</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {hallFeatures.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-8">
            <h2 className="text-2xl font-semibold">Highlights</h2>
            <div className="mt-6 space-y-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-slate-950/70 p-4"
                >
                  <p className="text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
