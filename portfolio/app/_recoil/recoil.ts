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

export { selectedWorkAtom, isWorkSelectedAtom };
