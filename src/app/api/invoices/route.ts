import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const payload = await request.json();
  const booking = await prisma.booking.findUnique({ where: { id: payload.bookingId } });

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json({
    invoiceId: `INV-${booking.id.slice(0, 6).toUpperCase()}`,
    customerName: booking.customerName,
    amount: booking.estimatedTotal,
    status: 'generated',
  });
}
