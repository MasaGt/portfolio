import { atom } from "recoil";
import { Work } from "../_types/types";

const selectedWorkAtom = atom<Work>({
  key: "work",
  default: { title: "", description: "", skills: [], imgs: [], thumbnail: "" },
});

const isWorkSelectedAtom = atom({
  key: "isWorkSelected",
  default: false,
});

/**
 * flag to control visiblity of "close" and Skills element in Works Section
 */
const isInitDisplayAtom = atom({
  key: "isInitDisplay",
  default: true,
});

export { selectedWorkAtom, isWorkSelectedAtom, isInitDisplayAtom };
