import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const packages = await prisma.pricePackage.findMany({ orderBy: { createdAt: 'asc' } });
  return NextResponse.json(packages);
}

export async function POST(request: Request) {
  const payload = await request.json();
  const item = await prisma.pricePackage.create({
    data: {
      name: payload.name,
      price: Number(payload.price),
      description: payload.description,
    },
  });
  return NextResponse.json(item, { status: 201 });
}
