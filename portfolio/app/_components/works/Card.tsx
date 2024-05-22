import Image from "next/image";
import { Work } from "@/app/_types/types";
import { useSetRecoilState } from "recoil";
import { selectedWork, isWorkSelected } from "@/app/_recoil/recoil";

const Card = ({ children }: { children: Work }) => {
  const setWork = useSetRecoilState(selectedWork);
  const setIsSelected = useSetRecoilState(isWorkSelected);
  const selectWork = () => {
    setWork(children);
    setIsSelected(true);
  };

  return (
    <div className="workcard" onClick={selectWork}>
      <Image
        src={`/${children.thumbnail}`}
        alt={`${children.title}'s image`}
        width={300}
        height={300}
      />
      <div className="workcard_title text-white">{children.title}</div>
    </div>
  );
};

export default Card;
