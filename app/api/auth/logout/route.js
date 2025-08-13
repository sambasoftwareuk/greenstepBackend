export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { getDb } from "@/lib/db";

export async function POST() {
  try {
    const token = cookies().get("session")?.value;
    if (token) {
      const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
      const db = getDb();
      await db.execute("DELETE FROM sessions WHERE session_token_hash = ?", [tokenHash]);
    }
    const res = NextResponse.json({ ok: true });
    // cookie’yi sil
    res.cookies.set("session", "", { httpOnly: true, path: "/", expires: new Date(0) });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
