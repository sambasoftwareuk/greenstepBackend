import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Environment variables'den kullanıcı bilgilerini al
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    const superAdminUsername = process.env.SUPER_ADMIN_USERNAME;
    const superAdminPassword = process.env.SUPER_ADMIN_PASSWORD;
    const directorUsername = process.env.DIRECTOR_USERNAME;
    const directorPassword = process.env.DIRECTOR_PASSWORD;

    let user = null;
    let role = null;
    let permissions = [];
    let redirectUrl = null;

    // Admin kontrolü
    if (username === adminUsername && password === adminPassword) {
      user = adminUsername;
      role = "admin";
      permissions = ["can_edit"]; // Basit yetki, detaylar rolePermissions.json'dan gelecek
      redirectUrl = "/admin/urunler";
    }
    // Super Admin kontrolü
    else if (
      username === superAdminUsername &&
      password === superAdminPassword
    ) {
      user = superAdminUsername;
      role = "super_admin";
      permissions = ["can_edit"]; // Basit yetki, detaylar rolePermissions.json'dan gelecek
      redirectUrl = "/superadmin/urunler";
    }
    // Director kontrolü
    else if (username === directorUsername && password === directorPassword) {
      user = directorUsername;
      role = "director";
      permissions = ["can_edit"]; // Basit yetki, detaylar rolePermissions.json'dan gelecek
      redirectUrl = "/director/urunler";
    }

    if (!user) {
      return NextResponse.json(
        { error: "Geçersiz kullanıcı adı veya şifre" },
        { status: 401 }
      );
    }

    // JWT token oluştur
    const token = jwt.sign(
      {
        username: user,
        role: role,
        permissions: permissions,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Response oluştur
    const response = NextResponse.json(
      {
        message: `${
          role.charAt(0).toUpperCase() + role.slice(1)
        } girişi başarılı`,
        user: {
          username: user,
          role: role,
          permissions: permissions,
        },
        redirectUrl: redirectUrl,
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
