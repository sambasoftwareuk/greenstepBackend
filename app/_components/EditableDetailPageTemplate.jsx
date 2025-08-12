"use client";

import React from "react";
import Image from "next/image";
import { Header1, Header2 } from "@/app/_atoms/Headers";
import { MobileSideMenu, SideMenu } from "@/app/_molecules/sideMenu";
import Breadcrumb from "@/app/_molecules/breadCrumb";
import EditableMainItemGrid from "@/app/_components/EditableMainItemGrid";
import EditableWrapper from "./EditableWrapper";
import { useAuth } from "../contexts/AuthContext";
import { CardImage } from "@/app/_atoms/images";

const EditableDetailPageTemplate = ({
  title,
  description,
  image,
  menu,
  activeHref,
  otherItems,
  otherItemsTitle,
  baseHref,
  notFoundText,
  onSave,
  productId,
  canEditTitle = true,
  canEditDescription = true,
  canEditImage = true,
  canEditMenu = true,
}) => {
  const { user } = useAuth();

  const handleSave = async (formData) => {
    if (onSave) {
      // image değişikliği varsa hem image hem de imageLink alanlarını güncelle
      const updatedData = { ...formData, id: productId };
      if (formData.image && formData.image !== image) {
        updatedData.imageLink = formData.image;
      }
      await onSave(updatedData);
    }
  };

  const titleFields = [{ name: "title", label: "Başlık", type: "text" }];

  const descriptionFields = [
    { name: "description", label: "Açıklama", type: "textarea", rows: 10 },
  ];

  const imageFields = [{ name: "image", label: "Resim URL", type: "text" }];

  const sideMenuFields = [
    { name: "menuTitle", label: "Menü Başlığı", type: "text" },
  ];

  if (!title) {
    return <div className="p-6 text-red-500">{notFoundText}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center">
        <Breadcrumb />
      </div>

      {/* Editable Title */}
      <EditableWrapper
        onSave={handleSave}
        initialData={{ title }}
        fields={titleFields}
        className="mb-5 text-center"
        canEdit={canEditTitle}
      >
        <div className="relative inline-block">
          <Header1 className="my-5">{title}</Header1>
        </div>
      </EditableWrapper>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Editable Side Menu */}
        <div className="relative">
          <EditableWrapper
            onSave={handleSave}
            initialData={{ menuTitle: "Ürünlerimiz" }}
            fields={sideMenuFields}
            className="mb-4"
            canEdit={canEditMenu}
          >
            <SideMenu menu={menu} activeHref={activeHref} />
          </EditableWrapper>
          <MobileSideMenu menu={menu} activeHref={activeHref} />
        </div>

        {/* Editable Description */}
        <EditableWrapper
          onSave={handleSave}
          initialData={{ description }}
          fields={descriptionFields}
          className="w-full lg:w-1/2 max-w-2xl"
          canEdit={canEditDescription}
        >
          <div className="relative">
            <div
              className="prose prose-lg w-full text-justify"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </EditableWrapper>

        {/* Editable Image */}
        <EditableWrapper
          onSave={handleSave}
          initialData={{ image }}
          fields={imageFields}
          className="relative"
          canEdit={canEditImage}
        >
          <div className="relative w-[300px] h-[300px]">
            <CardImage
              imageLink={image}
              imageAlt={title}
              aspectRatio="aspect-square"
            />
          </div>
        </EditableWrapper>
      </div>

      {/* Editable Other Items Title */}
      <EditableWrapper
        onSave={handleSave}
        initialData={{ otherItemsTitle }}
        fields={[
          {
            name: "otherItemsTitle",
            label: "Diğer Ürünler Başlığı",
            type: "text",
          },
        ]}
        className="my-8"
      >
        <Header2 className="text-center my-8">{otherItemsTitle}</Header2>
      </EditableWrapper>

      {/* Editable Other Items Grid */}
      <EditableMainItemGrid
        items={otherItems}
        baseHref={baseHref}
        gridClassName="grid-cols-1 md:grid-cols-3"
        cardProps={{ button: false, variant: 2 }}
        onSave={handleSave}
      />
    </div>
  );
};

export default EditableDetailPageTemplate;
