import { atom, selector } from "recoil";
import { Work } from "../_types/types";

const selectedWorkAtom = atom<Work>({
  key: "work",
  default: {
    title: "",
    description: "",
    skills: [],
    imgs: [],
    thumbnail: "",
    type: "",
  },
});

const isWorkSelectedAtom = atom({
  key: "isWorkSelected",
  default: false,
});

/**
 * Path of the detailed image of the selected work
 * 選択されたワークの詳細画像のパス
 */
const selectedImageAtom = atom<string>({
  key: "selectedImage",
  default: "",
});

/**
 * Selector that returns true if any image path is set to "selectedImageAtom". Otherwise, false.
 * 詳細画像が選択されていたら true。そうでなければ false を返す Selector
 */
// const isImageSelectedSelector = selector({
//   key: "selectedImageSelector",
//   get: ({ get }) => {
//     const selectedImage = get(selectedImageAtom);
//     return Boolean(selectedImage);
//   },
// });

export {
  selectedWorkAtom,
  isWorkSelectedAtom,
  selectedImageAtom,
  // isImageSelectedSelector,
};
