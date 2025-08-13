"use client";

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { PrimaryButton } from "../_atoms/buttons";

const EditButton = ({ editUrl }) => {
  const { canEdit, user, logout } = useAuth();

  if (!canEdit()) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className="flex justify-between items-center mb-4 max-w-7xl mx-auto px-4">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">
          Hoş geldin, <strong>{user?.username}</strong> ({user?.role})
        </span>
        <PrimaryButton
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
        >
          Çıkış
        </PrimaryButton>
      </div>
      <PrimaryButton
        onClick={() => (window.location.href = editUrl)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        ✏️ Düzenle
      </PrimaryButton>
    </div>
  );
};

export default EditButton;
