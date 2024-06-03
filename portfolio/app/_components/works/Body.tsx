"use client";
import { WorkCarousel } from "./WorksCarousel";
import { ImageCarousel } from "./ImagesCarousel";
import { useRecoilValue, useResetRecoilState, useRecoilState } from "recoil";
import { selectedWorkAtom, isWorkSelectedAtom } from "@/app/_recoil/recoil";
import clsx from "clsx";
import { useState, useEffect } from "react";

const Body = () => {
  const [isWorkSelected, setIsWorkSelected] =
    useRecoilState(isWorkSelectedAtom);
  const selectedWork = useRecoilValue(selectedWorkAtom);
  const clearSelectedWork = useResetRecoilState(selectedWorkAtom);
  const [isInitDisplay, setIsInitDisplay] = useState(true);

  /**
   * Check if any work is assigned to "selectedWork". If a user has not selected a work yet, it means it is initial display.
   * @returns {boolean} False if none of works is assigned to "selectedWork" variable yet.
   *    Otherwise, true.
   */
  const isSelectedWorkEmpty = (): boolean => {
    let isAssigned = Object.values(selectedWork).filter((val) => {
      return val.length > 0;
    }).length;
    return !isAssigned;
  };

  useEffect(() => {
    // without the if condition, init display check runs every time "selectedWork" variable changes.
    // "selectedWork" variable chages when an user selects(clicks) a different work.
    if (isInitDisplay) {
      setIsInitDisplay(isSelectedWorkEmpty());
    }
  }, [selectedWork]);

  const onClick = () => {
    setIsWorkSelected(false);
  };

  const onTransitionEnd = () => {
    if (!isWorkSelected) {
      clearSelectedWork();
    }
  };

  return (
    <div className="works">
      <div className="works_info md:pt-20 pt-16 px-6">
        <div className="overflow-hidden  flex items-end">
          <div
            className={clsx("flex justify-between items-center w-full", {
              images_appear: isWorkSelected,
              images_disappear: !isWorkSelected,
            })}
          >
            <div className="text-heading">{selectedWork.title}</div>
            <div
              onClick={onClick}
              className={clsx("cursor-pointer text-small", {
                images_appear: isWorkSelected,
                images_disappear: !isWorkSelected,
              })}
            >
              {!isInitDisplay && "Close"}
            </div>
          </div>
        </div>
      </div>
      <div className="works_main overflow-hidden relative">
        <div
          className={clsx("w-full h-full absolute", {
            works_appear: !isWorkSelected && !isInitDisplay,
            works_disappear: isWorkSelected && !isInitDisplay,
          })}
        >
          <WorkCarousel />
        </div>
        <div
          className={clsx("w-full h-full absolute image-carousel", {
            images_appear: isWorkSelected && !isInitDisplay,
            images_disappear: !isWorkSelected && !isInitDisplay,
          })}
          onTransitionEnd={onTransitionEnd}
        >
          <ImageCarousel />
        </div>
      </div>
      <div className="works_desc works_info px-6 pt-10 pb-4">
        <div className="overflow-hidden">
          <div
            className={clsx("flex gap-y-10 flex-col text-normal", {
              images_appear: isWorkSelected,
              images_disappear: !isWorkSelected,
            })}
          >
            <div>{selectedWork.description}</div>
            <div>
              <div
                className={clsx({
                  images_appear: isWorkSelected,
                  images_disappear: !isWorkSelected,
                })}
              >
                {((isInitDisplay && !isWorkSelected) ||
                  (!isInitDisplay && !isWorkSelected)) &&
                  "Skills"}
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
    </div>
  );
};

export default Body;
