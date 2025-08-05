import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  // Admin sayfalarını koru
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/sambaAdminLogin", request.url));
    }

    try {
      // JWT token'ı doğrula
      const decoded = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      // Admin rolü kontrolü
      if (decoded.payload.role !== "admin") {
        return NextResponse.redirect(new URL("/sambaAdminLogin", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      // Geçersiz token - login sayfasına yönlendir
      return NextResponse.redirect(new URL("/sambaAdminLogin", request.url));
    }
  }

  // Süper admin sayfalarını koru
  if (request.nextUrl.pathname.startsWith("/superadmin")) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.redirect(
        new URL("/sambaSuperAdminLogin", request.url)
      );
    }

    try {
      // JWT token'ı doğrula
      const decoded = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      // Süper admin rolü kontrolü
      if (decoded.payload.role !== "super_admin") {
        return NextResponse.redirect(
          new URL("/sambaSuperAdminLogin", request.url)
        );
      }

      return NextResponse.next();
    } catch (error) {
      // Geçersiz token - login sayfasına yönlendir
      return NextResponse.redirect(
        new URL("/sambaSuperAdminLogin", request.url)
      );
    }
  }

  // Direktör sayfalarını koru
  if (request.nextUrl.pathname.startsWith("/director")) {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/sambaDirectorLogin", request.url));
    }

    try {
      // JWT token'ı doğrula
      const decoded = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      // Direktör rolü kontrolü
      if (decoded.payload.role !== "director") {
        return NextResponse.redirect(
          new URL("/sambaDirectorLogin", request.url)
        );
      }

      return NextResponse.next();
    } catch (error) {
      // Geçersiz token - login sayfasına yönlendir
      return NextResponse.redirect(new URL("/sambaDirectorLogin", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/superadmin/:path*", "/director/:path*"],
};
