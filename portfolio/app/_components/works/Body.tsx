"use client";
import { WorkCarousel } from "./WorksCarousel";
import { ImageCarousel } from "./ImagesCarousel";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  selectedWorkAtom,
  isWorkSelectedAtom,
  isInitDisplayAtom,
} from "@/app/_recoil/recoil";
import clsx from "clsx";

const Body = () => {
  const selectedWork = useRecoilValue(selectedWorkAtom);
  const [isWorkSelected, setIsWorkSelected] =
    useRecoilState(isWorkSelectedAtom);
  const isInitDisplay = useRecoilValue(isInitDisplayAtom);

  const onClick = () => {
    setIsWorkSelected(false);
  };

  return (
    <div className="works">
      <div className="works_info basis-1/5 md:pt-20 pt-16 px-6 flex items-end">
        <div
          className={clsx("flex justify-between items-center w-full", {
            "works_info-shown": isWorkSelected,
            "works_info-hidden": !isWorkSelected,
          })}
        >
          <div className="text-heading">{selectedWork.title}</div>
          <div
            onClick={onClick}
            className={clsx("cursor-pointer text-small", {
              "works_info-shown": isWorkSelected && !isInitDisplay,
              visible: isWorkSelected,
              invisible: isInitDisplay,
            })}
          >
            Close
          </div>
        </div>
      </div>
      <div className="works_main">
        <div
          className={clsx("h-full", {
            visible: !isWorkSelected,
            hidden: isWorkSelected,
          })}
        >
          <WorkCarousel />
        </div>
        <div
          className={clsx("h-full", {
            visible: isWorkSelected,
            hidden: !isWorkSelected,
          })}
        >
          <ImageCarousel />
        </div>
      </div>
      <div className="works_desc works_info px-6 pt-10 pb-4">
        <div
          className={clsx("flex gap-y-10 flex-col text-normal", {
            "works_info-shown": isWorkSelected,
            "works_info-hidden": !isWorkSelected,
          })}
        >
          <div>{selectedWork.description}</div>
          <div>
            <div
              className={clsx("w-fit", {
                "works_info-shown": isWorkSelected && !isInitDisplay,
                visible: isWorkSelected,
                invisible: isInitDisplay,
              })}
            >
              Skills
            </div>
            <div className="flex gap-3 flex-wrap">
              {selectedWork.skills.map((skill, i) => (
                <div key={i} className="text-center border p-1 text-small">
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
