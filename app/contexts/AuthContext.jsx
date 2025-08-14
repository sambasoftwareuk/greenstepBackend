"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/session", { credentials: "include" });
      const data = await response.json();

      if (response.ok && data.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const hasPermission = (permission) => {
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission);
  };

  const canEdit = () => {
    return hasPermission("can_edit");
  };

  const getRoleUrl = () => {
    if (!user) return "/urunler";
    return "/urunler-edit";
  };

  const value = {
    user,
    loading,
    logout,
    hasPermission,
    canEdit,
    checkAuth,
    getRoleUrl,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
