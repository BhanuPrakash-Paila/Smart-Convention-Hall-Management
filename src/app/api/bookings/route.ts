import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(bookings);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const booking = await prisma.booking.create({
    data: {
      customerName: payload.customerName,
      phone: payload.phone,
      email: payload.email,
      eventType: payload.eventType,
      eventDate: payload.eventDate,
      startTime: payload.startTime,
      endTime: payload.endTime,
      guests: Number(payload.guests),
      packageType: payload.packageType,
      services: JSON.stringify(payload.services || []),
      notes: payload.notes,
      estimatedTotal: Number(payload.estimatedTotal),
      advancePaid: Number(payload.advancePaid),
      status: payload.status || 'Pending',
    },
  });
  return NextResponse.json(booking, { status: 201 });
}
