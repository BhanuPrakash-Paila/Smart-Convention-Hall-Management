export type BookingStatus = "Pending" | "Confirmed" | "Cancelled";

export interface BookingRecord {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  guests: number;
  packageType: string;
  services: string[];
  notes: string;
  estimatedTotal: number;
  advancePaid: number;
  status: BookingStatus;
  createdAt: string;
}

export interface AvailabilityResponse {
  date: string;
  available: boolean;
  bookedSlots: string[];
}
