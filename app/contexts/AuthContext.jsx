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
      const response = await fetch("/api/auth/verify");
      const data = await response.json();

      console.log("Auth check response:", data);

      if (response.ok && data.authenticated) {
        console.log("Setting user:", data.user);
        console.log("User role:", data.user.role);
        setUser(data.user);
      } else {
        console.log("Not authenticated or error:", data);
      }
    } catch (error) {
      console.error("Auth check error:", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
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
    return (
      hasPermission("edit_atoms") ||
      hasPermission("edit_molecules") ||
      hasPermission("edit_components")
    );
  };

  const value = {
    user,
    loading,
    logout,
    hasPermission,
    canEdit,
    checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
