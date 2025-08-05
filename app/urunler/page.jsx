"use client";

import React from "react";
import products from "../constants/bigCardProducts.json";
import EditableMainItemGrid from "../_components/EditableMainItemGrid";
import Breadcrumb from "../_molecules/breadCrumb";
import { useAuth } from "../contexts/AuthContext";

const ProductPage = () => {
  const { user, canEdit, loading } = useAuth();

  const handleSave = async (updatedProduct) => {
    try {
      // Burada API'ye kaydetme işlemi yapılacak
      console.log("Product updated:", updatedProduct);

      // Örnek API çağrısı:
      // const response = await fetch(`/api/products/${updatedProduct.id}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(updatedProduct)
      // });
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  // Debug bilgileri
  console.log("Auth Debug:", { user, canEdit, loading });

  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      {/* Debug bilgileri */}
      {user && (
        <div className="bg-blue-100 p-4 mb-4 rounded">
          <p>
            <strong>Kullanıcı:</strong> {user.username}
          </p>
          <p>
            <strong>Rol:</strong> {user.role}
          </p>
          <p>
            <strong>Düzenleme Yetkisi:</strong> {canEdit() ? "Var" : "Yok"}
          </p>
          <p>
            <strong>Yetkiler:</strong> {user.permissions?.join(", ")}
          </p>
        </div>
      )}

      <Breadcrumb />
      <EditableMainItemGrid
        items={products}
        title="Ürünlerimiz"
        baseHref="urunler"
        onSave={handleSave}
      />
    </div>
  );
};

export default ProductPage;
