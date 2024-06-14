import { WorkType } from "@/app/_types/types";
import Image from "next/image";
import { tv } from "tailwind-variants";

const Card = ({
  imgSrc,
  title,
  type = "",
}: {
  imgSrc: string;
  title: string;
  type?: WorkType;
}) => {
  // card style
  const card = tv({
    slots: {
      wrapper: "h-full relative",
      img: "object-cover",
    },
    variants: {
      workType: {
        web: {
          wrapper: "aspect-square",
          img: "aspect-square",
        },
        mobile: {
          wrapper: "aspect-moblie",
          img: "aspect-moblie",
        },
        "": {
          wrapper: "aspect-square",
          img: "aspect-square",
        },
      },
      isThumbnail: {
        true: {
          wrapper:
            "aspect-square lg:cursor-pointer overflow-hidden after:content-[attr(after-dynamic-value)] after:w-full after:text-white after:text-center after:inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2",
          img: "aspect-square lg:hover:scale-105 lg:transition lg:ease-in lg:duration-200",
        },
      },
    },
  });

  const { wrapper, img } = card({
    isThumbnail: type === "",
    workType: type,
  });

  return (
    <div after-dynamic-value={title} className={wrapper()}>
      <Image
        src={`/${imgSrc}`}
        alt={`${title}'s image`}
        fill
        // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        sizes="50vh"
        className={img()}
      />
    </div>
  );
};

export default Card;
