import { AdminPanel } from "@/components/admin/AdminPanel";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Admin Dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
            Manage bookings, services, and pricing from one place.
          </h1>
        </section>
        <AdminPanel />
      </div>
    </main>
  );
}
