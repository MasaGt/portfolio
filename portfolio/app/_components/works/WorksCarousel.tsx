"use client";
import Card from "./Card";
import { works_data } from "../../../works";
import { Work } from "@/app/_types/types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CarouselSection = () => {
  const works: Work[] = works_data;
  // if work card is selected. show it's images instead works.
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
        {works.map((data, i) => (
          <SwiperSlide className="swiper_slide" key={i}>
            <Card key={i} children={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
