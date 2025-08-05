"use client";

import React from "react";
import products from "../../constants/bigCardProducts.json";
import EditableMainItemGrid from "../../_components/EditableMainItemGrid";
import Breadcrumb from "../../_molecules/breadCrumb";
import { useAuth } from "../../contexts/AuthContext";

const AdminProductPage = () => {
  const { user, canEdit, loading } = useAuth();

  const handleSave = async (updatedProduct) => {
    try {
      console.log("Admin - Product updated:", updatedProduct);

      // API'ye kaydet
      if (updatedProduct.id) {
        const response = await fetch(`/api/products/${updatedProduct.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        });

        if (response.ok) {
          console.log("Product saved successfully");
          // Sayfayı yenile
          window.location.reload();
        } else {
          console.error("Failed to save product");
        }
      }
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      {/* Admin Header */}
      <div className="bg-primary text-white p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold">Admin Paneli - Ürünler</h1>
        <p className="text-primary50">Hoş geldin, {user?.username}!</p>
        <p className="text-primary50">Rol: {user?.role}</p>
      </div>

      <Breadcrumb />
      <EditableMainItemGrid
        items={products}
        title="Ürünlerimiz (Admin Görünümü)"
        baseHref="admin/urunler"
        onSave={handleSave}
      />
    </div>
  );
};

export default AdminProductPage;
