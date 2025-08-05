"use client";

import React from "react";
import products from "../../constants/bigCardProducts.json";
import EditableMainItemGrid from "../../_components/EditableMainItemGrid";
import Breadcrumb from "../../_molecules/breadCrumb";
import { useAuth } from "../../contexts/AuthContext";

const SuperAdminProductPage = () => {
  const { user, canEdit, loading } = useAuth();

  const handleSave = async (updatedProduct) => {
    try {
      console.log("Super Admin - Product updated:", updatedProduct);
      // Süper admin için özel kaydetme işlemi
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      {/* Super Admin Header */}
      <div className="bg-secondary text-white p-4 mb-6 rounded-lg">
        <h1 className="text-2xl font-bold">Süper Admin Paneli - Ürünler</h1>
        <p className="text-secondary100">Hoş geldin, {user?.username}!</p>
        <p className="text-secondary100">Rol: {user?.role}</p>
        <p className="text-secondary100">Tam yetki ile sistem yönetimi</p>
      </div>

      <Breadcrumb />
      <EditableMainItemGrid
        items={products}
        title="Ürünlerimiz (Süper Admin Görünümü)"
        baseHref="superadmin/urunler"
        onSave={handleSave}
      />
    </div>
  );
};

export default SuperAdminProductPage;
