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
      watchOverflow={true}
      modules={[Mousewheel, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={true}
      mousewheel={true}
      breakpoints={{
        640: {
          // min width of image = 640 - (x+30) * 1 = 0
          // x = 610
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          // min width of image = 768 - (x+30) * 2 = 0
          // x = 354
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          // min width of image = 1024 - (x+30) * 3 = 0
          // x =311
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="h-full"
    >
      {selectedWork.imgs.map((img, i) => (
        <SwiperSlide className="swiper_slide h-full w-fit" key={i}>
          <Image
            className="lg:cursor-pointer object-contain w-fit"
            src={`/${img}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            alt={`${selectedWork.title}'s images`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
