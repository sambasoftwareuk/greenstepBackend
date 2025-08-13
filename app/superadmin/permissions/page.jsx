"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Header1 } from "@/app/_atoms/Headers";
import { PrimaryButton } from "@/app/_atoms/buttons";
import Breadcrumb from "@/app/_molecules/breadCrumb";

const PermissionsPage = () => {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [permissions, setPermissions] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && (!user || user.role !== "super_admin")) {
      router.push("/urunler");
    }
  }, [authLoading, user, router]);

  // Yetkileri yükle
  useEffect(() => {
    const loadPermissions = async () => {
      try {
        const response = await fetch("/api/permissions/update");
        if (response.ok) {
          const data = await response.json();
          setPermissions(data);
        }
      } catch (error) {
        console.error("Permission load error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user && user.role === "super_admin") {
      loadPermissions();
    }
  }, [user]);

  const handlePermissionChange = (role, permission, value) => {
    setPermissions((prev) => ({
      ...prev,
      [role]: {
        ...prev[role],
        [permission]: value,
      },
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch("/api/permissions/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(permissions),
      });

      if (response.ok) {
        alert("Yetkiler başarıyla güncellendi!");
      } else {
        alert("Yetki güncelleme hatası!");
      }
    } catch (error) {
      console.error("Permission update error:", error);
      alert("Bağlantı hatası!");
    }
  };

  if (authLoading || loading || !permissions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  if (!user || user.role !== "super_admin") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Yetkiniz yok!
      </div>
    );
  }

  const permissionLabels = {
    edit_products: "Ürün Düzenleme",
    edit_title: "Başlık Düzenleme",
    add_products: "Ürün Ekleme",
    delete_products: "Ürün Silme",
    edit_images: "Resim Düzenleme",
    edit_descriptions: "Açıklama Düzenleme",
    manage_users: "Kullanıcı Yönetimi",
    access_financial: "Finansal Erişim",
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />

        <div className="bg-primary text-white p-6 mb-8 rounded-lg">
          <Header1 className="mb-2">Yetki Yönetimi</Header1>
          <p className="text-primary50">Hoş geldin, {user.username}!</p>
          <p className="text-primary50">
            Admin ve Director rollerinin yetkilerini yönetin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Admin Yetkileri */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Admin Yetkileri
            </h2>
            <div className="space-y-3">
              {Object.entries(permissionLabels).map(([key, label]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <span className="font-medium">{label}</span>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={permissions.admin[key]}
                      onChange={(e) =>
                        handlePermissionChange("admin", key, e.target.checked)
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Director Yetkileri */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Director Yetkileri
            </h2>
            <div className="space-y-3">
              {Object.entries(permissionLabels).map(([key, label]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 border rounded"
                >
                  <span className="font-medium">{label}</span>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={permissions.director[key]}
                      onChange={(e) =>
                        handlePermissionChange(
                          "director",
                          key,
                          e.target.checked
                        )
                      }
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"
                    />
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Super Admin Yetkileri (Salt Okunur) */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-purple-600">
              Super Admin Yetkileri
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              (Salt Okunur - Tüm Yetkiler Aktif)
            </p>
            <div className="space-y-3">
              {Object.entries(permissionLabels).map(([key, label]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 border rounded bg-gray-50"
                >
                  <span className="font-medium">{label}</span>
                  <span className="text-green-600 font-bold">✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <PrimaryButton
            onClick={handleSave}
            label="Yetkileri Kaydet"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PermissionsPage;
