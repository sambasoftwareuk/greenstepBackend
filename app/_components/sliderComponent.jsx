import { SambaSlider } from "../_molecules/slider";
import { SliderImage } from "../_atoms/images";
import SliderCard from "../_molecules/sliderCard";

const SliderComponent = ({ size, variant, sliderData = [], orientation }) => {
  return (
    <SambaSlider
      size={size}
      variant={variant}
      itemsPerSlide={1}
      isInfinite={true}
    >
      {sliderData.map((content, index) => {
        const { link, title, subtitle, body, primaryLabel, secondaryLabel } =
          content;
        const hasImage = !!link;
        const hasCard =
          title || subtitle || body || primaryLabel || secondaryLabel;

        return (
          <div
  key={index}
  className={
    orientation === "split-horizontal"
      ? "relative w-full h-full md:flex"
      : "relative w-full h-full"
  }
>
  {/* Görsel */}
  {hasImage && (
    <div
      className={`w-full h-full z-0 
        ${
          orientation === "split-horizontal"
            ? "absolute inset-0 md:relative md:w-6/12 md:h-full bg-primary50"
            : ""
        }`}
    >
      <SliderImage imageLink={`/${link}`} size={size} orientation={orientation} />
    </div>
  )}

  {/* Kart */}
  {hasCard && (
    <div
      className={`
        ${
          orientation === "split-horizontal"
            ? "absolute -inset-x-0 flex items-center justify-center p-4 md:static md:w-6/12 md:justify-start md:items-center bg-transparent md:bg-primary50"
        : "absolute inset-0 flex items-end pointer-events-none"
        }`}
    >
      <div
        className={`max-w-xl pointer-events-auto
          ${
            orientation === "overlay-center"
              ? "mx-auto p-10 md:p-0"
              : orientation === "overlay-left"
              ? "ml-[10%] mr-auto"
              : orientation === "overlay-right"
              ? "mr-[10%] ml-auto"
              : ""
          }`}
      >
        <SliderCard
          title={title}
          subtitle={subtitle}
          body={body}
          primaryLabel={primaryLabel}
          secondaryLabel={secondaryLabel}
        />
      </div>
    </div>
  )}
</div>

        );
      })}
    </SambaSlider>
  );
};

export default SliderComponent;
