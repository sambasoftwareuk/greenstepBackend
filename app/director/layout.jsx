"use client";

import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DirectorLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== "director")) {
      router.push("/sambaDirectorLogin");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Yükleniyor...</div>
      </div>
    );
  }

  if (!user || user.role !== "director") {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Director Navigation */}
      <nav className="bg-red text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Direktör Paneli</h1>
          <div className="flex items-center space-x-4">
            <span>Hoş geldin, {user.username}</span>
            <button
              onClick={() => router.push("/sambaDirectorLogin")}
              className="bg-red100 hover:bg-red text-black hover:text-white px-4 py-2 rounded"
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
