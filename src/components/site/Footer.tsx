import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10 text-sm text-slate-400 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">Smart Convention Hall Management</p>
          <p>Modern bookings, seamless scheduling, and trusted hospitality.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/about" className="transition hover:text-white">About</Link>
          <Link href="/booking" className="transition hover:text-white">Book Now</Link>
          <Link href="/admin" className="transition hover:text-white">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
