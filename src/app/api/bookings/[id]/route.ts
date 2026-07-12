import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const payload = await request.json();
  const booking = await prisma.booking.update({
    where: { id: params.id },
    data: { status: payload.status },
  });

  return NextResponse.json(booking);
}
