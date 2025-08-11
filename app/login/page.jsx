"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import { InputBasic } from "../_atoms/inputs";
import { PrimaryButton } from "../_atoms/buttons";
import { Header1 } from "../_atoms/Headers";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { checkAuth } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Önce mevcut cookie'yi temizle
      await fetch("/api/auth/logout", { method: "POST" });

      const response = await fetch("/api/auth/unified-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Başarılı giriş - rol bazlı yönlendirme
        const redirectUrl = data.redirectUrl;

        // AuthContext'i güncelle
        await checkAuth();

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
            Yönetim Paneli Girişi
          </Header1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Kullanıcı adı ve şifrenizi girerek giriş yapın
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
              label={loading ? "Giriş yapılıyor..." : "Giriş Yap"}
              className="group relative w-full flex justify-center py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
        </form>

        {/* Kullanıcı Bilgileri (Development için) */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            Test Kullanıcıları:
          </h3>
          <div className="text-xs text-blue-700 space-y-1">
            <div>
              <strong>Admin:</strong> admin / admin123
            </div>
            <div>
              <strong>Super Admin:</strong> superadmin / super123
            </div>
            <div>
              <strong>Director:</strong> director / director123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
