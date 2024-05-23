"use client";
import { WorkCarousel } from "./WorksCarousel";
import { ImageCarousel } from "./ImagesCarousel";
import { useRecoilValue } from "recoil";
import { selectedWorkAtom, isWorkSelectedAtom } from "@/app/_recoil/recoil";
import clsx from "clsx";

const Body = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  const isWorkSelected = useRecoilValue(isWorkSelectedAtom);

  return (
    <div className="works">
      <div className="works_blur works_title text-white">
        <div
          className={clsx({
            visible: isWorkSelected,
            invisible: !isWorkSelected,
          })}
        >
          {selectedWork.title}
        </div>
      </div>
      <div className="works_main">
        <div
          className={clsx("h-full", {
            block: !isWorkSelected,
            hidden: isWorkSelected,
          })}
        >
          <WorkCarousel />
        </div>
        <div
          className={clsx("h-full", {
            block: isWorkSelected,
            hidden: !isWorkSelected,
          })}
        >
          <ImageCarousel />
        </div>
      </div>
      <div className="works_blur works_desc text-white">
        <div
          className={clsx({
            visible: isWorkSelected,
            invisible: !isWorkSelected,
          })}
        >
          <div>{selectedWork.description}</div>
          <div>
            <div className="w-fit">Skills</div>
            {selectedWork.skills.map((skill, i) => (
              <div key={i}>{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
