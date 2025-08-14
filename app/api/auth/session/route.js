export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";

export async function GET() {
  try {
    const user = await getSessionUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ authenticated: true, user });
  } catch (e) {
    console.error("Session check error:", e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
