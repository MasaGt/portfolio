import { tv } from "tailwind-variants";
import { useWorkState } from "@/app/_hooks/useWorkState";
import { WorkThumbnailCarousel } from "./WorkThumbnailCarousel";
import { WorkDetailCarousel } from "./WorkDetailCarousel";

export const WorkMainPanel = () => {
  const { isWorkSelected, clearSelectedWork } = useWorkState();
  console.log(isWorkSelected);

  // Work Mail Panel Style
  const panel = tv({
    slots: {
      base: "main-panel-base overflow-hidden relative min-h-[50%] h-1/2",
      carouselWrapper: "main-panel-content w-full h-full absolute",
    },
    variants: {
      workSelected: {
        true: {
          carouselWrapper: "works-selected",
        },
        false: {
          carouselWrapper: "works-unselected",
        },
      },
      carouselType: {
        thumbnail: {
          carouselWrapper: "work-thumbnail-carousel",
        },
        details: {
          carouselWrapper:
            "work-detail-carousel -translate-y-full transition-transform",
        },
      },
    },
    compoundVariants: [
      {
        workSelected: false,
        carouselType: "thumbnail",
        className: {
          carouselWrapper:
            "work-carousel-apper ease-in-out duration-500 delay-500 translate-y-0",
        },
      },
      {
        workSelected: true,
        carouselType: "thumbnail",
        className: {
          carouselWrapper:
            "work-carousel-disapper ease-in-out duration-500 translate-y-full",
        },
      },
      {
        workSelected: true,
        carouselType: "details",
        className: {
          carouselWrapper:
            "detail-carousel-apper ease-in-out translate-y-0 duration-500 delay-500",
        },
      },
      {
        workSelected: false,
        carouselType: "details",
        className: {
          carouselWrapper:
            "detail-carousel-disapper ease-in-out -translate-y-full duration-500",
        },
      },
    ],
  });

  const { base, carouselWrapper } = panel();

  const onTransitionEnd = () => {
    if (!isWorkSelected) {
      clearSelectedWork();
    }
  };

  return (
    <div className={base()}>
      <div
        className={carouselWrapper({
          carouselType: "thumbnail",
          workSelected: isWorkSelected,
        })}
      >
        <WorkThumbnailCarousel />
      </div>
      <div
        className={carouselWrapper({
          carouselType: "details",
          workSelected: isWorkSelected,
        })}
        onTransitionEnd={onTransitionEnd}
      >
        <WorkDetailCarousel />
      </div>
    </div>
  );
};
