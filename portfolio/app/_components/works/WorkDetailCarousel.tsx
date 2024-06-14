import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useWorkState } from "@/app/_hooks/useWorkState";
import { tv } from "tailwind-variants";
import Card from "./Card";

export const WorkDetailCarousel = () => {
  const { selectedWork } = useWorkState();
  // Work Detail Carousel Style
  const carousel = tv({
    slots: {
      swiperWrapper: "h-full w-full relative",
      swiperSlide: "[&.swiper-slide]:w-fit h-full",
    },
  });

  const { swiperWrapper, swiperSlide } = carousel();

  return (
    <Swiper
      watchOverflow={true}
      modules={[Mousewheel, Navigation]}
      slidesPerView={"auto"}
      navigation={true}
      mousewheel={true}
      className={swiperWrapper()}
    >
      {selectedWork.imgs.map((img, i) => (
        <SwiperSlide className={swiperSlide()} key={i}>
          <Card
            imgSrc={img}
            title={selectedWork.title}
            type={selectedWork.type}
            key={i}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
