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

  // Debug bilgileri
  console.log("EditableWrapper Debug:", {
    canEdit: canEdit(),
    user,
    isEditing,
    hasChildren: !!children,
  });

  if (!canEdit()) {
    console.log("EditableWrapper: Düzenleme yetkisi yok");
    return <div className={className}>{children}</div>;
  }

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
    <div className={`relative group ${className}`}>
      {/* Edit Button */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleEdit();
        }}
        className="absolute top-2 right-2 z-10 bg-primary text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-primary900 shadow-lg"
        title="Düzenle"
      >
        <span className="text-sm">{editIcon}</span>
      </button>

      {/* Original Content */}
      {children}
    </div>
  );
};

export default EditableWrapper;
