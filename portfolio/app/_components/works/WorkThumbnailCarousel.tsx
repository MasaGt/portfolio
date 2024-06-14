import { Work } from "@/app/_types/types";
import { works_data } from "@/works";
import { Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useWorkState } from "@/app/_hooks/useWorkState";
import Card from "./Card";
import { tv } from "tailwind-variants";

export const WorkThumbnailCarousel = () => {
  // read work info from a file
  const works: Work[] = works_data;

  const { selectWork } = useWorkState();

  // Work Thumbnail Carousel Style
  const carousel = tv({
    slots: {
      swiperWrapper: "carousel-wrapper h-full w-full relative",
      swiperSlide: "carousel-slide [&.swiper-slide]:w-fit h-full",
    },
  });

  const { swiperWrapper, swiperSlide } = carousel();

  return (
    <Swiper
      watchOverflow={true}
      className={swiperWrapper()}
      modules={[Mousewheel, Navigation]}
      slidesPerView={"auto"}
      navigation={true}
      mousewheel={true}
    >
      {works.map((work, i) => (
        <SwiperSlide
          className={swiperSlide()}
          onClick={() => selectWork(work)}
          key={i}
        >
          <Card key={i} imgSrc={work.thumbnail} title={work.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
