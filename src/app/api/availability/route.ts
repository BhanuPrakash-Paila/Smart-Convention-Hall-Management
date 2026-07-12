import { NextResponse } from "next/server";
import { getAvailability } from "@/lib/store";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date") ?? "";

  return NextResponse.json({
    date,
    available: getAvailability(date).length === 0,
    bookedSlots: getAvailability(date),
  });
}
