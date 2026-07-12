import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    mapsApiKey: process.env.GOOGLE_MAPS_API_KEY || 'demo-key',
    location: 'Bengaluru, Karnataka',
    message: 'Google Maps integration ready for production API configuration.',
  });
}
