import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Environment variables'den kullanıcı bilgilerini al
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // Kullanıcı adı kontrolü
    if (username !== adminUsername) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // Şifre kontrolü (plain text karşılaştırma - production'da hash kullanın)
    if (password !== adminPassword) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // JWT token oluştur
    const token = jwt.sign(
      { username: adminUsername, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Response oluştur
    const response = NextResponse.json(
      {
        message: "Giriş başarılı",
        user: { username: adminUsername, role: "admin" },
      },
      { status: 200 }
    );

    // HTTP-only cookie olarak token'ı ayarla
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 saat
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
