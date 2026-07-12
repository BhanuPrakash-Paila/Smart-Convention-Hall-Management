"use client";

import { useEffect, useState } from "react";

type Booking = {
  id: string;
  customerName: string;
  email: string;
  eventDate: string;
  packageType: string;
  status: string;
  estimatedTotal: number;
};

const statuses = ["Pending", "Approved", "Confirmed", "Cancelled"];

export function BookingStatusManager() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    const response = await fetch("/api/bookings");
    const data = await response.json();
    setBookings(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const updateStatus = async (bookingId: string, status: string) => {
    await fetch(`/api/bookings/${bookingId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    loadBookings();
  };

  const generateInvoice = async (bookingId: string) => {
    const response = await fetch("/api/invoices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ bookingId }),
    });
    const data = await response.json();
    const blob = new Blob([`Invoice ID: ${data.invoiceId}\nCustomer: ${data.customerName}\nAmount: ₹${data.amount}`], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${data.invoiceId}.txt`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return <p className="text-slate-400">Loading bookings...</p>;
  }

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">{booking.customerName}</p>
              <p className="text-sm text-slate-400">{booking.email}</p>
              <p className="mt-2 text-sm text-slate-400">{booking.eventDate} • {booking.packageType}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <button
                  key={status}
                  onClick={() => updateStatus(booking.id, status)}
                  className={`rounded-full px-3 py-2 text-sm ${booking.status === status ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300"}`}
                >
                  {status}
                </button>
              ))}
              <button onClick={() => generateInvoice(booking.id)} className="rounded-full bg-emerald-500 px-3 py-2 text-sm text-slate-950">
                Invoice
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
