import {
  useRecoilState,
  // useRecoilValue,
  useResetRecoilState,
  // useSetRecoilState,
} from "recoil";
import { selectedWorkAtom, isWorkSelectedAtom } from "@/app/_recoil/recoil";
import { Work } from "../_types/types";

export const useWorkState = () => {
  // hooks to save selected work state
  // const setWork = useSetRecoilState(selectedWorkAtom);
  // const selectedWork = useRecoilValue(selectedWorkAtom);
  const [selectedWork, setSelectedWork] = useRecoilState(selectedWorkAtom);
  // const setIsSelected = useSetRecoilState(isWorkSelectedAtom);
  const [isWorkSelected, setIsWorkSelected] =
    useRecoilState(isWorkSelectedAtom);
  const clearSelectedWork = useResetRecoilState(selectedWorkAtom);

  const selectWork = (selectedWork: Work) => {
    setSelectedWork(selectedWork);
    setIsWorkSelected(true);
  };

  return {
    selectWork,
    selectedWork,
    isWorkSelected,
    setIsWorkSelected,
    clearSelectedWork,
  };
};
