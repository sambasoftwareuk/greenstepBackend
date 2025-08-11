"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

export default function DirectorUrunlerPage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== "director") {
        router.push("/urunler");
      } else {
        // URL'yi koruyarak yönlendir
        window.location.href = "/urunler-edit";
      }
    }
  }, [loading, user, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      Yönlendiriliyor...
    </div>
  );
}
