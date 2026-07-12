import type { BookingRecord } from "@/lib/types";

const initialBookings: BookingRecord[] = [
  {
    id: "BK-1001",
    customerName: "Sanjay Kumar",
    phone: "9876543210",
    email: "sanjay@example.com",
    eventType: "Wedding",
    eventDate: "2026-08-10",
    startTime: "18:00",
    endTime: "22:00",
    guests: 250,
    packageType: "Wedding Deluxe",
    services: ["Decoration", "Photography"],
    notes: "Need a floral stage setup.",
    estimatedTotal: 245000,
    advancePaid: 50000,
    status: "Confirmed",
    createdAt: "2026-07-01",
  },
];

let bookings: BookingRecord[] = [...initialBookings];

export function getBookings(): BookingRecord[] {
  return bookings;
}

export function addBooking(
  booking: Omit<BookingRecord, "id" | "status" | "createdAt">,
): BookingRecord {
  const record: BookingRecord = {
    ...booking,
    id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
    status: "Pending",
    createdAt: new Date().toISOString().slice(0, 10),
  };

  bookings = [record, ...bookings];
  return record;
}

export function getAvailability(date: string): string[] {
  return bookings
    .filter((booking) => booking.eventDate === date)
    .map((booking) => `${booking.startTime}-${booking.endTime}`);
}
