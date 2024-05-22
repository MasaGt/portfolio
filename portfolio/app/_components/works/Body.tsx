"use client";
import CarouselSection from "./CarouselSection";
import { useRecoilValue } from "recoil";
import { selectedWork, isWorkSelected } from "@/app/_recoil/recoil";
import clsx from "clsx";

const Body = () => {
  const work = useRecoilValue(selectedWork);
  const isSelected = useRecoilValue(isWorkSelected);

  return (
    <div className="works">
      <div className="works_blur works_title text-white">{work.title}</div>
      <div className="works_main">
        <CarouselSection />
      </div>
      <div
        className={clsx("works_blur works_desc text-white", {
          invisible: !isSelected,
          visible: isSelected,
        })}
      >
        <div>{work.description}</div>
        <div>
          <div className="w-fit">Skills</div>
          {work.skills.map((skill, i) => (
            <div key={i}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
