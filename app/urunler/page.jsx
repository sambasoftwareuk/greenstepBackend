"use client";

import React, { useState, useEffect } from "react";
import products from "@/app/constants/bigCardProducts.json";
import EditableMainItemGrid from "@/app/_components/EditableMainItemGrid";
import Breadcrumb from "@/app/_molecules/breadCrumb";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const { user, canEdit, loading } = useAuth();
  const router = useRouter();
  const [currentProducts, setCurrentProducts] = useState(products);
  const [pageTitle, setPageTitle] = useState("Ürünlerimiz");

  // Role göre düzenleme yetkilerini belirle
  const canEditProducts = () => {
    if (!user) return false;
    return ["admin", "super_admin", "director"].includes(user.role);
  };

  const canEditTitle = () => {
    if (!user) return false;
    return ["admin", "super_admin", "director"].includes(user.role);
  };

  const canDeleteContent = () => {
    if (!user) return false;
    return ["super_admin", "director"].includes(user.role);
  };

  const canManageUsers = () => {
    if (!user) return false;
    return ["super_admin", "director"].includes(user.role);
  };

  const canAccessFinancial = () => {
    if (!user) return false;
    return user.role === "director";
  };

  // Ürün kaydetme fonksiyonu
  const handleProductSave = async (updatedProduct) => {
    if (!canEditProducts()) {
      alert("Bu işlem için yetkiniz yok!");
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
        alert("Ürün güncellenirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Bir hata oluştu!");
    }
  };

  // Başlık kaydetme fonksiyonu
  const handleTitleSave = async (formData) => {
    if (!canEditTitle()) {
      alert("Bu işlem için yetkiniz yok!");
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
        alert("Başlık güncellenirken hata oluştu!");
      }
    } catch (error) {
      console.error("Error saving title:", error);
      alert("Bir hata oluştu!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      {/* Kullanıcı bilgileri ve yetkiler */}
      {user && (
        <div className="bg-primary text-white p-4 mb-6 rounded-lg max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">
            Hoş geldin, {user.username}!
          </h1>
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
                canDeleteContent() ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              İçerik Silme: {canDeleteContent() ? "✓" : "✗"}
            </div>
            <div
              className={`p-2 rounded ${
                canManageUsers() ? "bg-green-600" : "bg-gray-600"
              }`}
            >
              Kullanıcı Yönetimi: {canManageUsers() ? "✓" : "✗"}
            </div>
            {canAccessFinancial() && (
              <div className="p-2 rounded bg-green-600 col-span-2 md:col-span-4">
                Finansal Erişim: ✓
              </div>
            )}
          </div>
        </div>
      )}

      <Breadcrumb />

      {canEditProducts() ? (
        <EditableMainItemGrid
          items={currentProducts}
          title={pageTitle}
          baseHref="urunler"
          onSave={handleProductSave}
          onTitleSave={handleTitleSave}
        />
      ) : (
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">{pageTitle}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
