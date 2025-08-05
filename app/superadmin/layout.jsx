"use client";

import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuperAdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "super_admin")) {
      router.push("/sambaSuperAdminLogin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (!user || user.role !== "super_admin") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Super Admin Navigation */}
      <nav className="bg-secondary text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Süper Admin Paneli</h1>
          <div className="flex items-center space-x-4">
            <span>Hoş geldin, {user.username}</span>
            <button
              onClick={() => router.push("/sambaSuperAdminLogin")}
              className="bg-secondary400 hover:bg-secondary200 px-4 py-2 rounded"
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
