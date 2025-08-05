"use client";

import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("Admin Layout - User:", user);
    console.log("Admin Layout - Loading:", loading);
    console.log("Admin Layout - User role:", user?.role);

    if (!loading && (!user || user.role !== "admin")) {
      console.log(
        "Admin Layout - Redirecting to login, user role:",
        user?.role
      );
      router.push("/sambaAdminLogin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Navigation */}
      <nav className="bg-primary text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Paneli</h1>
          <div className="flex items-center space-x-4">
            <span>Hoş geldin, {user.username}</span>
            <button
              onClick={() => router.push("/sambaAdminLogin")}
              className="bg-primary900 hover:bg-primary500 px-4 py-2 rounded"
            >
              Çıkış
            </button>
          </div>
        </div>
      </nav>
      {children}
    </div>
  );
}
