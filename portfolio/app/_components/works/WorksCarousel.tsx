// "use client";
// import Card from "./Card";
// import { works_data } from "../../../works";
// import { Work } from "@/app/_types/types";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Mousewheel, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { useSetRecoilState } from "recoil";
// import { isWorkSelectedAtom, selectedWorkAtom } from "@/app/_recoil/recoil";

// export const WorkCarousel = () => {
//   // read work info from a file
//   const works: Work[] = works_data;
//   return (
//     <Swiper
//       watchOverflow={true}
//       className="h-full w-full relative"
//       modules={[Mousewheel, Navigation]}
//       slidesPerView={"auto"}
//       navigation={true}
//       mousewheel={true}
//     >
//       {works.map((work, i) => (
//         <SwiperSlide
//           className="[&.swiper-slide]:w-fit h-full"
//           onClick={selectWork}
//           key={i}
//           data-work={work}
//         >
//           <Card key={i} children={work} />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };
