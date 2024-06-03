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
    <Swiper
      watchOverflow={true}
      className="h-full w-full absolute"
      modules={[Mousewheel, Navigation]}
      spaceBetween={30}
      slidesPerView={"auto"}
      navigation={true}
      mousewheel={true}
    >
      {works.map((data, i) => (
        <SwiperSlide className="[&.swiper-slide]:w-fit h-full" key={i}>
          <Card key={i} children={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
