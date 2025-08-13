// app/api/auth/login/route.js
export const runtime = "nodejs"; // argon2 için Edge değil Node runtime

import { NextResponse } from "next/server";
import argon2 from "argon2";
import crypto from "crypto";
import { getDb } from "@/lib/db";

const PEPPER = process.env.PASSWORD_PEPPER || "";
const isProd = process.env.NODE_ENV === "production";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email ve parola gerekli" }, { status: 400 });
    }

    const db = getDb();
    const [rows] = await db.execute(
      "SELECT id, password_hash, is_active FROM users WHERE email = ? LIMIT 1",
      [email]
    );

    const user = Array.isArray(rows) && rows.length ? rows[0] : null;
    if (!user || !user.is_active) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ok = await argon2.verify(user.password_hash, (password || "") + PEPPER);
    if (!ok) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Session token üret ve DB'ye HASH'ini yaz
    const token = crypto.randomBytes(32).toString("base64url");
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
    const expires = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 gün

    await db.execute(
      "INSERT INTO sessions (user_id, session_token_hash, expires_at) VALUES (?,?,?)",
      [user.id, tokenHash, expires]
    );

    const res = NextResponse.json({ ok: true, userId: user.id });
    res.cookies.set("session", token, {
      httpOnly: true,
      secure: isProd,
      sameSite: "lax",
      path: "/",
      expires,
    });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
