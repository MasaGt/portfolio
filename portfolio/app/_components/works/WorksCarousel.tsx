"use client";
import Card from "./Card";
import { works_data } from "../../../works";
import { Work } from "@/app/_types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const WorkCarousel = () => {
  const works: Work[] = works_data;
  return (
    <div className="h-full">
      <Swiper
        watchOverflow={true}
        className="h-full"
        modules={[Mousewheel, Navigation]}
        spaceBetween={30}
        slidesPerView={"auto"}
        navigation={true}
        mousewheel={true}
      >
        {works.map((data, i) => (
          <SwiperSlide
            className="swiper_slide h-full lg:[&.swiper-slide]:w-1/3 md:[&.swiper-slide]:w-1/2 sm:[&.swiper-slide]:w-full"
            key={i}
          >
            <Card key={i} children={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
