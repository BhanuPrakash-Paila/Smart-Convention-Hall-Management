import Link from "next/link";

export function HeroSection() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl sm:p-12 lg:p-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Smart Convention Hall Booking Platform</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Digitally transform your venue booking experience.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Let customers discover halls, check availability, estimate costs, book instantly, and receive confirmations in a seamless online experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/booking" className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
              Book Your Event
            </Link>
            <Link href="/admin" className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              Admin Dashboard
            </Link>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-cyan-400/30 bg-cyan-500/10 p-6">
          <h2 className="text-xl font-semibold text-white">What this system provides</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">Real-time availability and slot protection</li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">Automated confirmation and reminder workflow</li>
            <li className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">Centralized admin panel for bookings and reports</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
