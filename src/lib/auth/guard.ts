import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth/jwt";

export async function requireAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return null;

  try {
    const payload = await verifyToken(token);
    if (payload.role !== "admin") return null;
    return payload as { id: string; email: string; role: string; name: string };
  } catch {
    return null;
  }
}
