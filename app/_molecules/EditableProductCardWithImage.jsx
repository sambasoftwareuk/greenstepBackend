"use client";

import React from "react";
import { CardImage } from "../_atoms/images";
import { PrimaryButton } from "../_atoms/buttons";
import EditableWrapper from "../_components/EditableWrapper";
import { useAuth } from "../contexts/AuthContext";
import { Header2, Header3 } from "../_atoms/Headers";

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
  productId,
  canEditImages = true,
  canEditDescriptions = true,
  canDelete = true,
}) => {
  const { canEdit } = useAuth();

  const handleSave = async (formData) => {
    if (onSave) {
      await onSave({ ...formData, id: productId });
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

  const imageFields = [
    { name: "imageLink", label: "Resim URL", type: "text" },
    {
      name: "imageFile",
      label: "Resim Dosyası",
      type: "file",
      accept: "image/*",
    },
  ];

  const buttonFields = [
    { name: "buttonLabel", label: "Buton Metni", type: "text" },
    { name: "button", label: "Buton Göster", type: "checkbox" },
  ];

  const Title = canEditDescriptions ? (
    <EditableWrapper
      onSave={handleSave}
      initialData={{ title, titleFontSize, titleColor }}
      fields={titleFields}
      className="relative"
    >
      <Header2
        className={`${titleFontSize} ${titleColor} mb-4 mt-8 ${
          showBottomLine ? "border-t border-border w-full pt-3" : ""
        }`}
      >
        {title}
      </Header2>
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

  const Description = canEditDescriptions ? (
    <EditableWrapper
      onSave={handleSave}
      initialData={{ description }}
      fields={descriptionFields}
      className="relative"
    >
      <div
        className="text-gray-600 mb-4"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </EditableWrapper>
  ) : (
    <div
      className="text-gray-600 mb-4"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );

  const Image = canEditImages ? (
    <EditableWrapper
      onSave={handleSave}
      initialData={{ imageLink }}
      fields={imageFields}
      className="relative"
    >
      <div className="overflow-hidden rounded-md my-5">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
          <CardImage imageLink={imageLink} imageAlt={title} />
        </div>
      </div>
    </EditableWrapper>
  ) : (
    <div className="overflow-hidden rounded-md my-5">
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <CardImage imageLink={imageLink} imageAlt={title} />
      </div>
    </div>
  );

  const Button = button ? (
    <EditableWrapper
      onSave={handleSave}
      initialData={{ buttonLabel, button }}
      fields={buttonFields}
      className="relative"
    >
      <div className="flex text-center justify-center mt-4">
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
      <div className="group bg-white flex flex-col md:flex-row rounded-lg shadow p-4 my-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
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
    1: [Title, Description, Image, Button],
    2: [Image, Title, Description, Button],
    3: [Button, Image, Title, Description],
  };

  const content = variantMap[variant] || variantMap[1];

  return (
    <div
      className={
        "group bg-white w-full flex flex-col rounded-lg shadow p-6 text-center justify-center my-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
      }
    >
      {content.map((element, index) => (
        <React.Fragment key={index}>{element}</React.Fragment>
      ))}
    </div>
  );
};

export default EditableProductCardWithImage;
