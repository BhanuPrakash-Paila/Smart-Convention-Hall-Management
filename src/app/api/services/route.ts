import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const services = await prisma.serviceItem.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(services);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const service = await prisma.serviceItem.create({ data: { name: payload.name, price: Number(payload.price) } });
  return NextResponse.json(service, { status: 201 });
}
