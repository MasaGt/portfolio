import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedWorkAtom } from "@/app/_recoil/recoil";

export const ImageCarousel = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  return (
    <Swiper
      //   watchOverflow={true}
      rewind={true}
      modules={[Mousewheel, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      mousewheel={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="h-full"
    >
      {selectedWork.imgs.map((img, i) => (
        <SwiperSlide className="swiper_slide h-full" key={i}>
          <Image
            className="lg:cursor-pointer object-contain"
            src={`/${img}`}
            fill
            sizes="100%"
            alt={`${selectedWork.title}'s images`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
