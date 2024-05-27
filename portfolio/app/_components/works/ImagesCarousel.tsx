import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedWorkAtom } from "@/app/_recoil/recoil";

// TODO: workcarousel とスライド,画像の設定を同じにする
export const ImageCarousel = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  return (
    <Swiper
      watchOverflow={true}
      modules={[Mousewheel, Navigation]}
      spaceBetween={30}
      slidesPerView={"auto"}
      navigation={true}
      mousewheel={true}
      className="h-full"
    >
      {selectedWork.imgs.map((img, i) => (
        <SwiperSlide className="swiper_slide" key={i}>
          <div className="workcard">
            <div className="relative h-full w-full">
              <Image
                className="lg:cursor-pointer object-cover"
                src={`/${img}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                alt={`${selectedWork.title}'s images`}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
