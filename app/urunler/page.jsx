import React from "react";
import products from "../constants/bigCardProducts.json";
import MainItemGrid from "../_components/MainItemGrid";
import Breadcrumb from "../_molecules/breadCrumb";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4">
      <Breadcrumb />
      <MainItemGrid items={products} title="Ürünlerimiz" baseHref="urunler" />
    </div>
  );
};

export default ProductPage;
