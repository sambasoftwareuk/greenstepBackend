"use client";

import React, { useState, useEffect } from "react";
import products from "@/app/constants/bigCardProducts.json";
import EditableMainItemGrid from "@/app/_components/EditableMainItemGrid";
import Breadcrumb from "@/app/_molecules/breadCrumb";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { Header1 } from "@/app/_atoms/Headers";

const EditProductPage = () => {
  const { user, canEdit, loading } = useAuth();
  const router = useRouter();
  const [currentProducts, setCurrentProducts] = useState(products);
  const [pageTitle, setPageTitle] = useState("Ürünlerimiz");
  const [rolePermissions, setRolePermissions] = useState(null);

  // Yetki kontrolü ve rol yetkilerini yükle
  useEffect(() => {
    if (!loading && !user) {
      router.push("/urunler");
      return;
    }

    // Rol yetkilerini yükle
    const loadPermissions = async () => {
      try {
        const response = await fetch("/api/permissions/update");
        if (response.ok) {
          const permissions = await response.json();
          setRolePermissions(permissions);
        }
      } catch (error) {
        console.error("Permission load error:", error);
      }
    };

    if (user) {
      loadPermissions();
    }
  }, [loading, user, router]);

  // Yetkileri periyodik olarak güncelle (her 2 saniyede bir)
  useEffect(() => {
    if (!user) return;

    const loadPermissions = async () => {
      try {
        const response = await fetch("/api/permissions/update");
        if (response.ok) {
          const permissions = await response.json();
          setRolePermissions(permissions);
        }
      } catch (error) {
        console.error("Permission update error:", error);
      }
    };

    // İlk yükleme
    loadPermissions();

    // Periyodik güncelleme
    const interval = setInterval(loadPermissions, 10000); // 10 saniye

    return () => clearInterval(interval);
  }, [user]);

  // Rol bazlı yetki kontrol fonksiyonları
  const canEditProducts = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_products || false;
  };

  const canEditTitle = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_title || false;
  };

  const canAddProducts = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.add_products || false;
  };

  const canDeleteProducts = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.delete_products || false;
  };

  const canEditImages = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_images || false;
  };

  const canEditDescriptions = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_descriptions || false;
  };

  const handleProductSave = async (updatedProduct) => {
    if (!canEditProducts()) {
      alert("Ürün düzenleme yetkiniz yok!");
      return;
    }

    try {
      const response = await fetch(`/api/products/${updatedProduct.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        setCurrentProducts((prevProducts) =>
          prevProducts.map((p) =>
            p.id === updatedProduct.id ? updatedProduct : p
          )
        );
        alert("Ürün başarıyla güncellendi!");
      } else {
        alert("Ürün güncelleme hatası!");
      }
    } catch (error) {
      console.error("Save error:", error);
      alert("Bağlantı hatası!");
    }
  };

  const handleTitleSave = async (formData) => {
    if (!canEditTitle()) {
      alert("Başlık düzenleme yetkiniz yok!");
      return;
    }

    try {
      const response = await fetch("/api/pages/update-title", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: "urunler",
          title: formData.title,
        }),
      });

      if (response.ok) {
        setPageTitle(formData.title);
        alert("Başlık başarıyla güncellendi!");
      } else {
        alert("Başlık güncelleme hatası!");
      }
    } catch (error) {
      console.error("Title save error:", error);
      alert("Bağlantı hatası!");
    }
  };

  if (loading || !rolePermissions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Giriş yapmanız gerekiyor!
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb />

        {/* Kullanıcı Bilgileri ve Yetkiler */}
        {user && (
          <div className="bg-primary text-white p-4 mb-6 rounded-lg">
            <Header1 className="mb-2">Hoş geldin, {user.username}!</Header1>
            <p className="text-primary50 mb-3">Rol: {user.role}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div
                className={`p-2 rounded ${
                  canEditProducts() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Ürün Düzenleme: {canEditProducts() ? "✓" : "✗"}
              </div>
              <div
                className={`p-2 rounded ${
                  canEditTitle() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Başlık Düzenleme: {canEditTitle() ? "✓" : "✗"}
              </div>
              <div
                className={`p-2 rounded ${
                  canAddProducts() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Ürün Ekleme: {canAddProducts() ? "✓" : "✗"}
              </div>
              <div
                className={`p-2 rounded ${
                  canDeleteProducts() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Ürün Silme: {canDeleteProducts() ? "✓" : "✗"}
              </div>
              <div
                className={`p-2 rounded ${
                  canEditImages() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Resim Düzenleme: {canEditImages() ? "✓" : "✗"}
              </div>
              <div
                className={`p-2 rounded ${
                  canEditDescriptions() ? "bg-green-600" : "bg-gray-600"
                }`}
              >
                Açıklama Düzenleme: {canEditDescriptions() ? "✓" : "✗"}
              </div>
            </div>
          </div>
        )}

        {/* Düzenlenebilir Grid */}
        <EditableMainItemGrid
          items={currentProducts}
          title={pageTitle}
          baseHref="urunler"
          onSave={handleProductSave}
          onTitleSave={canEditTitle() ? handleTitleSave : undefined}
          canEditImages={canEditImages()}
          canEditDescriptions={canEditDescriptions()}
          canEditTitle={canEditTitle()}
          canDelete={canDeleteProducts()}
          canAdd={canAddProducts()}
        />
      </div>
    </div>
  );
};

export default EditProductPage;
