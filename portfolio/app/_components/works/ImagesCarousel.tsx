import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { selectedWorkAtom } from "@/app/_recoil/recoil";
import { clsx } from "clsx";

export const ImageCarousel = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  return (
    <Swiper
      watchOverflow={true}
      modules={[Mousewheel, Navigation]}
      slidesPerView={"auto"}
      navigation={true}
      mousewheel={true}
      className="h-full w-full"
    >
      {selectedWork.imgs.map((img, i) => (
        <SwiperSlide className="[&.swiper-slide]:w-fit h-full" key={i}>
          <div
            className={clsx("lg:cursor-pointer relative h-full", {
              "aspect-square": selectedWork.type === "web",
              "aspect-moblie": selectedWork.type === "mobible",
            })}
          >
            <Image
              className={clsx({
                "aspect-square": selectedWork.type === "web",
                "aspect-moblie": selectedWork.type === "mobible",
              })}
              src={`/${img}`}
              fill
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              sizes="50vh"
              alt={`${selectedWork.title}'s images${i}`}
              priority={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
