import { atom } from "recoil";
import { Work } from "../_types/types";

const selectedWork = atom<Work>({
  key: "work",
  default: { title: "", description: "", skills: [], imgs: [], thumbnail: "" },
});

const isWorkSelected = atom({
  key: "isWorkSelected",
  default: false,
});

export { selectedWork, isWorkSelected };
