"use client";
import { WorkCarousel } from "./WorksCarousel";
import { ImageCarousel } from "./ImagesCarousel";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { selectedWorkAtom, isWorkSelectedAtom } from "@/app/_recoil/recoil";
import clsx from "clsx";

const Body = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  const isWorkSelected = useRecoilValue(isWorkSelectedAtom);
  const closeSelectedWork = useSetRecoilState(isWorkSelectedAtom);

  const onClick = () => {
    closeSelectedWork(false);
  };

  return (
    <div className="works">
      <div className="works_blur works_title text-white pt-20 px-6">
        <div
          className={clsx("flex justify-between", {
            visible: isWorkSelected,
            invisible: !isWorkSelected,
          })}
        >
          <div>{selectedWork.title}</div>
          <div onClick={onClick} className="cursor-pointer">
            Close
          </div>
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
      <div className="works_blur works_desc text-white px-6 py-10">
        <div
          className={clsx("flex gap-y-10 flex-col", {
            visible: isWorkSelected,
            invisible: !isWorkSelected,
          })}
        >
          <div>{selectedWork.description}</div>
          <div>
            <div className="w-fit">Skills</div>
            <div className="flex gap-x-3">
              {selectedWork.skills.map((skill, i) => (
                <div key={i} className="text-center border text-xs p-1">
                  <span
                    key={i}
                    className="inline-block relative top-1/2  translate-y-[-50%]"
                  >
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
