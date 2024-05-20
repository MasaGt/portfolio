"use client";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CarouselSection = ({
  children,
}: {
  children: { img: string; title: string; description: string }[];
}) => {
  return (
    <div>
      <Swiper
        loop={true}
        modules={[Mousewheel, Navigation]}
        spaceBetween={30}
        updateOnWindowResize={true}
        slidesPerView={3}
        navigation={true}
        mousewheel={true}
      >
        {children.map((data, i) => (
          <SwiperSlide className="swiper_slide" key={i}>
            <Card key={i} children={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
