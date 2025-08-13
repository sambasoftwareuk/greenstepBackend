export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getSessionUser, hasRole } from "@/lib/auth";

export async function GET() {
  const user = await getSessionUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (!hasRole(user, ["admin", "superadmin"])) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const db = getDb();
  const [rows] = await db.execute(
    "SELECT id, email, is_active, created_at FROM users ORDER BY id DESC LIMIT 50"
  );
  return NextResponse.json(rows);
}
