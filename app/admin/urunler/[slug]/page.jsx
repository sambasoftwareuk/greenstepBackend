"use client";

import React, { useState, useEffect } from "react";
import EditableDetailPageTemplate from "@/app/_components/EditableDetailPageTemplate";
import products from "../../../constants/bigCardProducts.json";
import sideMenuData from "../../../mocks/sideMenuData.json";
import { useAuth } from "../../../contexts/AuthContext";

export default function AdminProductDetailPage({ params }) {
  const { slug } = React.use(params);
  const { user } = useAuth();
  const [rolePermissions, setRolePermissions] = useState(null);
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  // Yetkileri yükle
  useEffect(() => {
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
    loadPermissions();
  }, []);

  const canEditImages = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_images || false;
  };

  const canEditDescriptions = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_descriptions || false;
  };

  const canEditTitle = () => {
    if (!rolePermissions || !user) return false;
    return rolePermissions[user.role]?.edit_title || false;
  };

  const handleSave = async (updatedData) => {
    try {
      // Admin için özel kaydetme işlemi
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
        activeHref={`/admin/urunler/${product?.slug}`}
        otherItems={products.filter((p) => p.slug !== slug)}
        otherItemsTitle="Diğer Ürünler"
        baseHref="admin/urunler"
        notFoundText="Ürün bulunamadı."
        onSave={handleSave}
        productId={product?.id}
        canEditTitle={canEditTitle()}
        canEditDescription={canEditDescriptions()}
        canEditImage={canEditImages()}
        canEditMenu={true}
      />
    </div>
  );
}
