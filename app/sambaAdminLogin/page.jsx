"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { InputBasic } from "../_atoms/inputs";
import { PrimaryButton } from "../_atoms/buttons";
import { Header1 } from "../_atoms/Headers";

export default function SambaAdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Önce mevcut cookie'yi temizle
      await fetch("/api/auth/logout", { method: "POST" });

      const response = await fetch("/api/auth/sambaAdminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      console.log("Admin Login Response:", data);

      if (response.ok) {
        // Başarılı giriş - rol bazlı yönlendirme
        const redirectUrl = data.redirectUrl || "/admin/urunler";
        console.log("Redirecting to:", redirectUrl);
        router.push(redirectUrl);
      } else {
        setError(data.error || "Giriş başarısız");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Bağlantı hatası");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Header1 className="mt-6 text-center text-gray-900">
            Admin Girişi
          </Header1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Atom, Molekül ve Component düzenleme yetkisi
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Kullanıcı Adı
              </label>
              <InputBasic
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full rounded-t-md focus:z-10 sm:text-sm"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Şifre
              </label>
              <InputBasic
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full rounded-b-md focus:z-10 sm:text-sm"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm text-center">{error}</div>
          )}

          <div>
            <PrimaryButton
              type="submit"
              disabled={loading}
              label={loading ? "Giriş yapılıyor..." : "Admin Girişi"}
              className="group relative w-full flex justify-center py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
