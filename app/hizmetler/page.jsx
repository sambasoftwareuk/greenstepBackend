import services from "../mocks/services.json";
import MainItemGrid from "../_components/MainItemGrid";
import Breadcrumb from "../_molecules/breadCrumb";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb />
      <MainItemGrid
        items={services}
        title="Hizmetler"
        baseHref="hizmetler"
        gridClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        cardProps={{ variant: 2, button: false, titleColor: "text-black" }}
      />
    </div>
  );
}
