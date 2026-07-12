import { BookingStatusManager } from "@/components/admin/BookingStatusManager";

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8">
        <h2 className="text-2xl font-semibold">Booking Management</h2>
        <p className="mt-2 text-slate-400">
          Approve, confirm, cancel, and generate invoices for customer bookings.
        </p>
      </div>

      <BookingStatusManager />
    </div>
  );
}
