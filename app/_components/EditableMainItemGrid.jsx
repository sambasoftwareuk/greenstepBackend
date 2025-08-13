"use client";

import React, { useState } from "react";
import EditableProductCardWithImage from "../_molecules/EditableProductCardWithImage";
import { Header1 } from "../_atoms/Headers";
import EditableWrapper from "./EditableWrapper";
import Link from "next/link";
import { SambaLinks } from "../_atoms/SambaLinks";

const EditableMainItemGrid = ({
  items,
  title,
  baseHref = "",
  gridClassName = "grid-cols-1 md:grid-cols-2",
  cardProps = {},
  onSave,
  onTitleSave,
  canEditImages = true,
  canEditDescriptions = true,
  canEditTitle = true,
  canDelete = true,
  canAdd = true,
}) => {
  const [products, setProducts] = useState(items);
  const [editingProductId, setEditingProductId] = useState(null);

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

      // Edit modunu kapat
      setEditingProductId(null);
    } catch (error) {
      console.error("Product save error:", error);
    }
  };

  const handleEditStart = (productId) => {
    setEditingProductId(productId);
  };

  const handleEditCancel = () => {
    setEditingProductId(null);
  };

  const titleFields = [{ name: "title", label: "Sayfa Başlığı", type: "text" }];

  const handleTitleSave = async (formData) => {
    // Title değişikliğini kaydet
    if (onTitleSave) {
      await onTitleSave(formData);
    }
  };

  // Her zaman düzenlenebilir grid'i göster, yetki kontrolü prop'larla yapılsın
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-4">
      {onTitleSave ? (
        <EditableWrapper
          onSave={onTitleSave || handleTitleSave}
          initialData={{ title }}
          fields={titleFields}
          className="mb-6 text-center"
        >
          <div className="relative inline-block">
            {title && <Header1 className="text-center">{title}</Header1>}
          </div>
        </EditableWrapper>
      ) : (
        <div className="mb-6">
          {title && <Header1 className="text-center">{title}</Header1>}
        </div>
      )}

      <div className={`grid ${gridClassName} gap-8 items-center`}>
        {products?.map((item) => {
          const linkUrl = `/${baseHref}/${item.slug}`;
          const isEditing = editingProductId === item.id;

          return (
            <div key={item.slug} className="relative">
              {isEditing ? (
                // Edit modunda iken Link kullanma, sadece kartı göster
                <div
                  className="cursor-default pointer-events-none"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                  }}
                >
                  <div className="pointer-events-auto">
                    <EditableProductCardWithImage
                      key={item.id}
                      title={item.title}
                      description={item.description}
                      imageLink={item.imageLink || item.image}
                      buttonLabel="DETAYLAR"
                      variant={1}
                      aspectRatio="aspect-[16/16]"
                      productId={item.id}
                      onSave={handleProductSave}
                      onEditStart={() => handleEditStart(item.id)}
                      onEditCancel={handleEditCancel}
                      canEditImages={canEditImages}
                      canEditDescriptions={canEditDescriptions}
                      canEditTitle={canEditTitle}
                      canDelete={canDelete}
                      {...cardProps}
                    />
                  </div>
                </div>
              ) : (
                // Normal modda Link kullan
                <Link href={linkUrl}>
                  <EditableProductCardWithImage
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    imageLink={item.imageLink || item.image}
                    buttonLabel="DETAYLAR"
                    variant={1}
                    aspectRatio="aspect-[16/16]"
                    productId={item.id}
                    onSave={handleProductSave}
                    onEditStart={() => handleEditStart(item.id)}
                    onEditCancel={handleEditCancel}
                    canEditImages={canEditImages}
                    canEditDescriptions={canEditDescriptions}
                    canEditTitle={canEditTitle}
                    canDelete={canDelete}
                    {...cardProps}
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditableMainItemGrid;
