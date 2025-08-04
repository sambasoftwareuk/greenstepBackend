import React from "react";
import sideMenuData from "../../mocks/sideMenuData.json";
import spareParts from "../../mocks/spareParts.json";
import DetailPageTemplate from "@/app/_components/DetailPageTemp";

export default async function SparePartDetailPage({ params }) {
  const { slug } = await params;
  const sparePart = spareParts.find((s) => s.slug === slug);

  const sparePartMenu = sideMenuData.filter(
    (section) => section.title === "Yedek Parçalar"
  );

  return (
    <DetailPageTemplate
      title={sparePart?.title}
      description={sparePart?.description}
      image={sparePart?.image}
      menu={sparePartMenu}
      activeHref={`/yedek-parcalar/${sparePart.slug}`}
      otherItems={spareParts?.filter((s) => s.slug !== slug)}
      otherItemsTitle="Diğer Yedek Parçalar"
      baseHref="edek-parcalar"
      notFoundText="Yedek Parça bulunamadi."
    />
  );
}
