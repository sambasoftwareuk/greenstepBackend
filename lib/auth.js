// lib/auth.js
import { cookies } from "next/headers";
import crypto from "crypto";
import { getDb } from "@/lib/db";

export async function getSessionUser() {
  const token = cookies().get("session")?.value;
  if (!token) return null;

  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  const db = getDb();

  // kullanıcı + roller
  const [rows] = await db.execute(
    `SELECT u.id, u.email, u.is_active
     FROM sessions s
     JOIN users u ON u.id = s.user_id
     WHERE s.session_token_hash = ? AND s.expires_at > NOW()
     LIMIT 1`,
    [tokenHash]
  );
  const user = Array.isArray(rows) && rows.length ? rows[0] : null;
  if (!user || !user.is_active) return null;

  const [rrows] = await db.execute(
    `SELECT r.name FROM user_roles ur JOIN roles r ON r.id = ur.role_id WHERE ur.user_id = ?`,
    [user.id]
  );
  user.roles = (rrows || []).map(r => r.name); // örn: ["admin","editor"]
  return user;
}

export function hasRole(user, names = []) {
  return user && user.roles && user.roles.some(r => names.includes(r));
}
