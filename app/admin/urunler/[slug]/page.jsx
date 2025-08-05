"use client";

import React from "react";
import EditableDetailPageTemplate from "@/app/_components/EditableDetailPageTemplate";
import products from "../../../constants/bigCardProducts.json";
import sideMenuData from "../../../mocks/sideMenuData.json";
import { useAuth } from "../../../contexts/AuthContext";

export default function AdminProductDetailPage({ params }) {
  const { slug } = params;
  const { user } = useAuth();
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  const handleSave = async (updatedData) => {
    try {
      console.log("Admin - Product detail updated:", updatedData);
      // Admin için özel kaydetme işlemi
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-primary text-white p-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">Admin Paneli - Ürün Detayı</h1>
          <p className="text-primary50">Hoş geldin, {user?.username}!</p>
          <p className="text-primary50">Düzenleme modu aktif</p>
        </div>
      </div>

      <EditableDetailPageTemplate
        title={product?.title}
        description={product?.description}
        image={product?.image}
        menu={productMenu}
        activeHref={`/admin/urunler/${product?.slug}`}
        otherItems={products.filter((p) => p.slug !== slug)}
        otherItemsTitle="Diğer Ürünler"
        baseHref="admin/urunler"
        notFoundText="Ürün bulunamadı."
        onSave={handleSave}
        productId={product?.id}
      />
    </div>
  );
}
