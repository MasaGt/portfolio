import { tv } from "tailwind-variants";
import { useWorkState } from "@/app/_hooks/useWorkState";

export const WorkTitlePanel = ({
  isInitDisplay,
}: {
  isInitDisplay: boolean;
}) => {
  const { isWorkSelected, selectedWork, setIsWorkSelected } = useWorkState();

  // Work Title Panel Style
  const panel = tv({
    slots: {
      base: "title-panel-base relative h-[10%]",
      wrapper: "title-panel-wrapper overflow-hidden flex items-end",
      content: "title-panel-container",
      workTitle:
        "work-title flex justify-between items-center w-full text-small",
      closeButton: "close-button cursor-pointer",
    },
    variants: {
      workSelected: {
        true: {
          base: "backdrop-blur",
          content: "images_appear",
        },
        false: {
          content: "images_disappear",
        },
      },
    },
  });

  const { base, wrapper, content, workTitle, closeButton } = panel({
    workSelected: isWorkSelected,
  });

  return (
    <div className={base()}>
      <div className={wrapper()}>
        <div className={content()}>
          <div className={workTitle()}>{selectedWork.title}</div>
          <div
            onClick={() => setIsWorkSelected(false)}
            className={closeButton()}
          >
            Close
            {/* {!isInitDisplay && "Close"} */}
          </div>
        </div>
      </div>
    </div>
  );
};
