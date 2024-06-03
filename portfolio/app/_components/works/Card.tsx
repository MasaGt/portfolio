import Image from "next/image";
import { Work } from "@/app/_types/types";
import { useSetRecoilState } from "recoil";
import { selectedWorkAtom, isWorkSelectedAtom } from "@/app/_recoil/recoil";

const Card = ({ children }: { children: Work }) => {
  const setWork = useSetRecoilState(selectedWorkAtom);
  const setIsSelected = useSetRecoilState(isWorkSelectedAtom);

  const selectWork = () => {
    setWork(children);
    setIsSelected(true);
  };

  return (
    <div
      after-dynamic-value={children.title}
      className="lg:cursor-pointer aspect-square overflow-hidden h-full relative after:content-[attr(after-dynamic-value)] after:w-full after:text-white after:text-center after:inline-block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2"
      onClick={selectWork}
    >
      <Image
        src={`/${children.thumbnail}`}
        alt={`${children.title}'s image`}
        fill
        // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        sizes="50vh"
        className="object-cover aspect-square lg:hover:scale-105 lg:transition lg:ease-in lg:duration-200"
      />
    </div>
  );
};

export default Card;
