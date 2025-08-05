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
}) => {
  const { canEdit, user } = useAuth();

  console.log("EditableDetailPageTemplate Debug:", {
    canEdit: canEdit(),
    user,
    productId,
    title,
    hasDescription: !!description,
    hasImage: !!image,
  });

  const handleSave = async (formData) => {
    if (onSave) {
      await onSave({ ...formData, id: productId });
    }
  };

  const titleFields = [{ name: "title", label: "Başlık", type: "text" }];

  const descriptionFields = [
    { name: "description", label: "Açıklama", type: "textarea", rows: 10 },
  ];

  const imageFields = [
    { name: "image", label: "Resim URL", type: "text" },
    {
      name: "imageFile",
      label: "Resim Dosyası",
      type: "file",
      accept: "image/*",
    },
  ];

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
        className="mb-5"
      >
        <Header1 className="text-center my-5">{title}</Header1>
      </EditableWrapper>

      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Editable Side Menu */}
        <div className="relative">
          <EditableWrapper
            onSave={handleSave}
            initialData={{ menuTitle: "Ürünlerimiz" }}
            fields={sideMenuFields}
            className="mb-4"
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
        >
          <div
            className="prose prose-lg w-full text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </EditableWrapper>

        {/* Editable Image */}
        <EditableWrapper
          onSave={handleSave}
          initialData={{ image }}
          fields={imageFields}
          className="relative"
        >
          <div>
            <CardImage
              imageLink={image}
              imageAlt={title}
              width={300}
              height={300}
              className="rounded-lg shadow-lg object-contain"
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
