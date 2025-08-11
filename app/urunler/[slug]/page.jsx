import DetailPageTemplate from "@/app/_components/DetailPageTemplate";
import products from "../../constants/bigCardProducts.json";
import sideMenuData from "../../mocks/sideMenuData.json";

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  const productMenu = sideMenuData.filter(
    (section) => section.title === "Ürünlerimiz"
  );

  if (!product) {
    return <div className="p-6 text-red-500">Ürün bulunamadı.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DetailPageTemplate
        title={product.title}
        description={product.description}
        image={product.image}
        menu={productMenu}
        activeHref={`/urunler/${product.slug}`}
        otherItems={products.filter((p) => p.slug !== slug)}
        otherItemsTitle="Diğer Ürünler"
        baseHref="urunler"
        notFoundText="Ürün bulunamadı."
      />
    </div>
  );
}
