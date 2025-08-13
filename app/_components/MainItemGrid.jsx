import React from "react";
import ProductCardWithImage from "../_molecules/productCardWithImage";
import { Header1 } from "../_atoms/Headers";
import Link from "next/link";

const MainItemGrid = ({
  items,
  title,
  baseHref = "", // default ""
  gridClassName = "grid-cols-1 md:grid-cols-2",
  cardProps = {},
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-4">
      {title && <Header1 className="text-center">{title}</Header1>}
      <div className={`grid ${gridClassName} gap-8 items-center`}>
        {items?.map((item) => (
          <Link key={item.slug} href={`/${baseHref}/${item.slug}`}>
            <ProductCardWithImage
              key={item.id}
              title={item.title}
              imageLink={item.imageLink || item.image}
              buttonLabel="DETAYLAR"
              variant={1}
              aspectRatio="aspect-[16/16]"
              {...cardProps}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainItemGrid;
