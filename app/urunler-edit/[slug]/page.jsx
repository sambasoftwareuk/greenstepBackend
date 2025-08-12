"use client";

import React, { useState, useEffect } from "react";
import EditableDetailPageTemplate from "@/app/_components/EditableDetailPageTemplate";
import products from "@/app/constants/bigCardProducts.json";
import sideMenuData from "@/app/mocks/sideMenuData.json";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function EditProductDetailPage({ params }) {
  const { slug } = React.use(params);
  const { user, canEdit, loading } = useAuth();
  const router = useRouter();
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  // Yetki kontrolü
  useEffect(() => {
    if (!loading && !canEdit()) {
      router.push(`/urunler/${slug}`);
    }
  }, [loading, canEdit, router, slug]);

  const handleSave = async (updatedData) => {
    try {
      // API'ye kaydet
      if (updatedData.id) {
        const response = await fetch(`/api/products/${updatedData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });

        if (response.ok) {
          // Ana sayfaya yönlendir
          router.push(`/urunler/${slug}`);
        } else {
          console.error("Failed to save product");
        }
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!canEdit()) {
    return <div>Yetkiniz yok!</div>;
  }

  if (!product) {
    return <div className="p-6 text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Edit Header */}
      <div className="bg-blue-100 p-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-800">
            Düzenleme Modu - Ürün Detayı
          </h1>
          <p className="text-blue-600">Hoş geldin, {user?.username}!</p>
          <p className="text-blue-600">
            Yaptığınız değişiklikler ana sayfaya aktarılacak
          </p>
        </div>
      </div>

      <EditableDetailPageTemplate
        title={product.title}
        description={product.description}
        image={product.imageLink || product.image}
        menu={productMenu}
        activeHref={`/urunler-edit/${product.slug}`}
        otherItems={products.filter((p) => p.slug !== slug)}
        otherItemsTitle="Diğer Ürünler"
        baseHref="urunler"
        notFoundText="Ürün bulunamadı."
        onSave={handleSave}
        productId={product.id}
        canEditTitle={true}
        canEditDescription={true}
        canEditImage={true}
        canEditMenu={true}
      />
    </div>
  );
}
