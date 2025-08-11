"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { InputBasic } from "../_atoms/inputs";
import { LabelPrimary } from "../_atoms/labels";
import { PrimaryButton, OutlinedButton } from "../_atoms/buttons";

const EditableWrapper = ({
  children,
  onSave,
  initialData = {},
  fields = [],
  className = "",
  editIcon = "✏️",
  saveIcon = "💾",
  cancelIcon = "❌",
}) => {
  const { canEdit, user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);

  // Debug bilgileri kaldırıldı

  if (!canEdit()) {
    console.log("EditableWrapper: Düzenleme yetkisi yok");
    return <div className={className}>{children}</div>;
  }

  // Düzenleme yetkisi varsa kalem ikonu göster
  const showEditIcon = canEdit() && !isEditing;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      if (onSave) {
        await onSave(formData);
      }

      // Eğer productId varsa API'ye kaydet
      if (formData.id) {
        const response = await fetch(`/api/products/${formData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log("Product saved to API successfully");
        } else {
          console.error("Failed to save to API");
        }
      }

      setIsEditing(false);
    } catch (error) {
      console.error("Save error:", error);
    }
  };

  const handleCancel = () => {
    setFormData(initialData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  if (isEditing) {
    return (
      <div className={`relative ${className}`}>
        {/* Edit Form */}
        <div className="border-2 border-primary300 rounded-lg p-4 bg-primary50">
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <LabelPrimary className="mb-2">{field.label}</LabelPrimary>
              {field.type === "textarea" ? (
                <textarea
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={field.rows || 3}
                />
              ) : field.type === "file" ? (
                <input
                  type="file"
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.files[0])
                  }
                  className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  accept={field.accept || "*/*"}
                />
              ) : field.type === "checkbox" ? (
                <input
                  type="checkbox"
                  checked={formData[field.name] || false}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.checked)
                  }
                  className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                />
              ) : (
                <InputBasic
                  type={field.type || "text"}
                  value={formData[field.name] || ""}
                  onChange={(e) =>
                    handleInputChange(field.name, e.target.value)
                  }
                  className="border-border focus:ring-primary"
                />
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <PrimaryButton
              label="Kaydet"
              icon={saveIcon}
              onClick={handleSave}
              className="flex items-center gap-2"
            />
            <OutlinedButton
              label="İptal"
              icon={cancelIcon}
              onClick={handleCancel}
              className="flex items-center gap-2"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Edit Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleEdit();
        }}
        className="absolute top-2 right-2 z-10 bg-white text-primary border-2 border-primary p-2 rounded-lg opacity-100 transition-all duration-200 hover:bg-primary hover:text-white shadow-md hover:shadow-lg"
        title="Düzenle"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>

      {/* Original Content */}
      {children}
    </div>
  );
};

export default EditableWrapper;
