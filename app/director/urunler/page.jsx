"use client";

import React from "react";
import products from "../../constants/bigCardProducts.json";
import EditableMainItemGrid from "../../_components/EditableMainItemGrid";
import Breadcrumb from "../../_molecules/breadCrumb";
import { useAuth } from "../../contexts/AuthContext";

const DirectorProductPage = () => {
  const { user, canEdit, loading } = useAuth();

  const handleSave = async (updatedProduct) => {
    try {
      console.log("Director - Product updated:", updatedProduct);
      // Direktör için özel kaydetme işlemi
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      {/* Director Header */}
      <div className="bg-red text-white p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold">Direktör Paneli - Ürünler</h1>
        <p className="text-red100">Hoş geldin, {user?.username}!</p>
        <p className="text-red100">Rol: {user?.role}</p>
        <p className="text-red100">Tam yetki ile sistem ve finansal yönetim</p>
      </div>

      <Breadcrumb />
      <EditableMainItemGrid
        items={products}
        title="Ürünlerimiz (Direktör Görünümü)"
        baseHref="director/urunler"
        onSave={handleSave}
      />
    </div>
  );
};

export default DirectorProductPage;
