"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import products from "../../../constants/bigCardProducts.json";
import EditableDetailPageTemplate from "../../../_components/EditableDetailPageTemplate";
import Breadcrumb from "../../../_molecules/breadCrumb";
import sideMenuData from "../../../mocks/sideMenuData.json";

export default function SuperAdminProductDetailPage({ params }) {
  const { slug } = params;
  const { user } = useAuth();
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  const handleSave = async (updatedData) => {
    try {
      // Süper admin için özel kaydetme işlemi
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <EditableDetailPageTemplate
        title={product?.title}
        description={product?.description}
        image={product?.imageLink || product?.image}
        menu={productMenu}
        activeHref={`/superadmin/urunler/${product?.slug}`}
        otherItems={products.filter((p) => p.slug !== slug)}
        otherItemsTitle="Diğer Ürünler"
        baseHref="superadmin/urunler"
        notFoundText="Ürün bulunamadı."
        onSave={handleSave}
        productId={product?.id}
        canEditTitle={true}
        canEditDescription={true}
        canEditImage={true}
        canEditMenu={true}
      />
    </div>
  );
}
