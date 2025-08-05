"use client";

import React, { useState } from "react";
import EditableProductCardWithImage from "../_molecules/EditableProductCardWithImage";
import { Header1 } from "../_atoms/Headers";
import EditableWrapper from "./EditableWrapper";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { SambaLinks } from "../_atoms/SambaLinks";

const EditableMainItemGrid = ({
  items,
  title,
  baseHref = "",
  gridClassName = "grid-cols-1 md:grid-cols-2",
  cardProps = {},
  onSave,
}) => {
  const { canEdit } = useAuth();
  const [products, setProducts] = useState(items);

  const handleProductSave = async (updatedProduct) => {
    try {
      // API'ye kaydet
      if (onSave) {
        await onSave(updatedProduct);
      }

      // Local state'i güncelle
      setProducts((prev) =>
        prev.map((product) =>
          product.id === updatedProduct.id
            ? { ...product, ...updatedProduct }
            : product
        )
      );
    } catch (error) {
      console.error("Product save error:", error);
    }
  };

  const titleFields = [{ name: "title", label: "Sayfa Başlığı", type: "text" }];

  const handleTitleSave = async (formData) => {
    // Title değişikliğini kaydet
    console.log("Title saved:", formData);
  };

  if (!canEdit()) {
    // Normal görünüm - düzenleme yetkisi yoksa
    return (
      <div className="w-full max-w-7xl mx-auto mt-6 p-4">
        {title && <Header1 className="text-center">{title}</Header1>}
        <div className={`grid ${gridClassName} gap-8 items-center`}>
          {products?.map((item) => (
            <Link key={item.slug} href={`/${baseHref}/${item.slug}`}>
              <EditableProductCardWithImage
                key={item.id}
                title={item.title}
                imageLink={item.image}
                buttonLabel="DETAYLAR"
                variant={1}
                aspectRatio="aspect-[16/16]"
                productId={item.id}
                onSave={handleProductSave}
                {...cardProps}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Düzenleme yetkisi varsa
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-4">
      <EditableWrapper
        onSave={handleTitleSave}
        initialData={{ title }}
        fields={titleFields}
        className="mb-6"
      >
        {title && <Header1 className="text-center">{title}</Header1>}
      </EditableWrapper>

      <div className={`grid ${gridClassName} gap-8 items-center`}>
        {products?.map((item) => (
          <div key={item.slug} className="relative">
            <Link href={`/${baseHref}/${item.slug}`} className="block">
              <EditableProductCardWithImage
                key={item.id}
                title={item.title}
                imageLink={item.image}
                buttonLabel="DETAYLAR"
                variant={1}
                aspectRatio="aspect-[16/16]"
                productId={item.id}
                onSave={handleProductSave}
                {...cardProps}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditableMainItemGrid;
