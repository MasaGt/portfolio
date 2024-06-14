import { tv } from "tailwind-variants";
import { useWorkState } from "@/app/_hooks/useWorkState";

export const WorkDescriptionPanel = ({
  isInitDisplay,
}: {
  isInitDisplay: boolean;
}) => {
  const { selectedWork, isWorkSelected } = useWorkState();

  // Work Description Panel Style
  const panel = tv({
    slots: {
      base: "panel-base px-6 pt-10 pb-4",
      wrapper: "panel-wrapper overflow-hidden",
      content: "panel-content flex gap-y-10 flex-col text-normal",
      workDescription: "work-description",
      workSkillWrapper: "work-skills flex flex-wrap gap-3",
      skillsHeading: "skills-heading",
      skillItemWrapper: "skill-item-wrapper flex gap-3 flex-wrap",
      skillItem: "skill-item text-center border p-1 text-small",
      skillText: "skill-text inline-block relative top-1/2  translate-y-[-50%]",
    },
    variants: {
      workSelected: {
        true: {
          base: "backdrop-blur",
          content: "images_appear",
          workSkillHeading: "images_appear",
        },
        false: {
          content: "images_disappear",
          workSkillHeading: "images_disappear",
        },
      },
    },
  });

  const {
    base,
    wrapper,
    content,
    workDescription,
    workSkillWrapper,
    skillsHeading,
    skillItemWrapper,
    skillItem,
    skillText,
  } = panel({ workSelected: isWorkSelected });

  return (
    <div className={base()}>
      <div className={wrapper()}>
        <div className={content()}>
          <div className={workDescription()}>{selectedWork.description}</div>
          <div className={workSkillWrapper()}>
            <div className={skillsHeading()}>{!isInitDisplay && "Skills"}</div>
            <div className={skillItemWrapper()}>
              {selectedWork.skills.map((skill, i) => (
                <div key={i} className={skillItem()}>
                  <span key={i} className={skillText()}>
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
