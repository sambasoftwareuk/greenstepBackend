import React from "react";
import products from "@/app/constants/bigCardProducts.json";
import MainItemGrid from "@/app/_components/MainItemGrid";
import Breadcrumb from "@/app/_molecules/breadCrumb";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      <Breadcrumb />

      <MainItemGrid
        items={products}
        title="Ürünlerimiz"
        baseHref="urunler"
        gridClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        cardProps={{ button: true, variant: 1 }}
      />
    </div>
  );
}
