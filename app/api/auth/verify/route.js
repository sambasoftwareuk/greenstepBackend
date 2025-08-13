import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    // Cookie'den token'ı al
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Token bulunamadı" }, { status: 401 });
    }

    // Token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return NextResponse.json({
      authenticated: true,
      user: {
        username: decoded.username,
        role: decoded.role,
        permissions: decoded.permissions || [],
      },
    });
  } catch (error) {
    console.error("Token verification error:", error);
    return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
  }
}
