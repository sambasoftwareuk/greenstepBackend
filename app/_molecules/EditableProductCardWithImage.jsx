"use client";

import React from "react";
import { CardImage } from "../_atoms/images";
import { PrimaryButton } from "../_atoms/buttons";
import EditableWrapper from "../_components/EditableWrapper";
import { useAuth } from "../contexts/AuthContext";
import { Header2 } from "../_atoms/Headers";

const EditableProductCardWithImage = ({
  title,
  description,
  imageLink,
  layout = "vertical",
  variant = 1,
  button = true,
  buttonLabel = "INCELE",
  imagePosition = "left",
  titleFontSize = "text-xl md:text-2xl",
  titleColor = "text-blue-600",
  showBottomLine = false,
  onSave,
  onEditStart,
  onEditCancel,
  productId,
  canEditImages = true,
  canEditDescriptions = true,
  canEditTitle = true,
  canDelete = true,
}) => {
  const { canEdit } = useAuth();

  const handleSave = async (formData) => {
    if (onSave) {
      // imageLink değişikliği varsa hem image hem de imageLink alanlarını güncelle
      const updatedData = { ...formData, id: productId };
      if (formData.imageLink && formData.imageLink !== imageLink) {
        updatedData.image = formData.imageLink;
        updatedData.imageLink = formData.imageLink;
      }
      await onSave(updatedData);
    }
  };

  const handleEditStart = () => {
    if (onEditStart) {
      onEditStart();
    }
  };

  const handleEditCancel = () => {
    if (onEditCancel) {
      onEditCancel();
    }
  };

  const titleFields = [
    { name: "title", label: "Başlık", type: "text" },
    { name: "titleFontSize", label: "Başlık Font Boyutu", type: "text" },
    { name: "titleColor", label: "Başlık Rengi", type: "text" },
  ];

  const descriptionFields = [
    { name: "description", label: "Açıklama", type: "textarea" },
  ];

  const imageFields = [{ name: "imageLink", label: "Resim URL", type: "text" }];

  const buttonFields = [
    { name: "buttonLabel", label: "Buton Metni", type: "text" },
    { name: "button", label: "Buton Göster", type: "checkbox" },
  ];

  const Title = canEditTitle ? (
    <EditableWrapper
      onSave={handleSave}
      onEditStart={handleEditStart}
      onEditCancel={handleEditCancel}
      initialData={{ title, titleFontSize, titleColor }}
      fields={titleFields}
      className="relative"
    >
      <div className="relative">
        <Header2
          className={`${titleFontSize} ${titleColor} mb-4 mt-8 ${
            showBottomLine ? "border-t border-border w-full pt-3" : ""
          }`}
        >
          {title}
        </Header2>
      </div>
    </EditableWrapper>
  ) : (
    <Header2
      className={`${titleFontSize} ${titleColor} mb-4 mt-8 ${
        showBottomLine ? "border-t border-border w-full pt-3" : ""
      }`}
    >
      {title}
    </Header2>
  );

  const Image = canEditImages ? (
    <EditableWrapper
      onSave={handleSave}
      onEditStart={handleEditStart}
      onEditCancel={handleEditCancel}
      initialData={{ imageLink }}
      fields={imageFields}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-md my-5">
        <CardImage imageLink={imageLink} imageAlt={title} />
      </div>
    </EditableWrapper>
  ) : (
    <div className="overflow-hidden rounded-md my-5">
      <CardImage imageLink={imageLink} imageAlt={title} />
    </div>
  );

  const Button = button ? (
    <EditableWrapper
      onSave={handleSave}
      onEditStart={handleEditStart}
      onEditCancel={handleEditCancel}
      initialData={{ buttonLabel, button }}
      fields={buttonFields}
      className="relative"
    >
      <div className="relative flex text-center justify-center mt-4">
        <PrimaryButton label={buttonLabel} className="rounded-full" />
      </div>
    </EditableWrapper>
  ) : null;

  if (layout === "horizontal") {
    const imageContent = <div className="w-full md:w-1/2">{Image}</div>;

    const textContent = (
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-left">
        {Title}
        {Button}
      </div>
    );

    return (
      <div className="group bg-white flex flex-col md:flex-row rounded-lg shadow p-4 my-6">
        {imagePosition === "left" ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    );
  }

  const variantMap = {
    1: [Title, Image, Button],
    2: [Image, Title, Button],
    3: [Button, Image, Title],
  };

  const content = variantMap[variant] || variantMap[1];

  return (
    <div
      className={
        "group bg-white w-full flex flex-col rounded-lg shadow p-6 text-center justify-center my-6"
      }
    >
      {content.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </div>
  );
};

export default EditableProductCardWithImage;
