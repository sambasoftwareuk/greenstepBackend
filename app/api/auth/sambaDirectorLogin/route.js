import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Environment variables'den kullanıcı bilgilerini al
    const directorUsername = process.env.DIRECTOR_USERNAME;
    const directorPassword = process.env.DIRECTOR_PASSWORD;

    // Kullanıcı adı kontrolü
    if (username !== directorUsername) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // Şifre kontrolü
    if (password !== directorPassword) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // JWT token oluştur
    const token = jwt.sign(
      {
        username: directorUsername,
        role: "director",
        permissions: [
          "edit_atoms",
          "edit_molecules",
          "edit_components",
          "edit_users",
          "edit_settings",
          "delete_content",
          "manage_all",
          "financial_access",
        ],
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Response oluştur
    const response = NextResponse.json(
      {
        message: "Direktör girişi başarılı",
        user: {
          username: directorUsername,
          role: "director",
          permissions: [
            "edit_atoms",
            "edit_molecules",
            "edit_components",
            "edit_users",
            "edit_settings",
            "delete_content",
            "manage_all",
            "financial_access",
          ],
        },
        redirectUrl: "/director/urunler", // Direktör için özel URL
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
