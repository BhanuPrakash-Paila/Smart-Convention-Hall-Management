import { hallFeatures } from "@/lib/data";

export default function HallDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Hall Details</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Spacious venue designed for celebrations and business events.</h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Enjoy elegant interiors, flexible seating, modern amenities, and seamless service for weddings, receptions, birthdays, and corporate functions.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
            <h2 className="text-2xl font-semibold">Venue Amenities</h2>
            <ul className="mt-6 space-y-3 text-slate-300">
              {hallFeatures.map((feature) => (
                <li key={feature} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-cyan-400/30 bg-cyan-500/10 p-8">
            <h2 className="text-2xl font-semibold">Ideal For</h2>
            <div className="mt-6 space-y-3 text-slate-300">
              {['Wedding receptions', 'Birthday parties', 'Corporate seminars', 'Engagement ceremonies'].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
