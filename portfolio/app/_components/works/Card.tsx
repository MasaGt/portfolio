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
    <div className="workcard" onClick={selectWork}>
      <div className="relative h-full w-full">
        <Image
          src={`/${children.thumbnail}`}
          alt={`${children.title}'s image`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="workcard_title text-white">{children.title}</div>
    </div>
  );
};

export default Card;
