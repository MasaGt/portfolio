import { selectedImageAtom } from "@/app/_recoil/recoil";
import { useRecoilValue } from "recoil";
import Image from "next/image";

export const Modal = () => {
  const selectedImagePath = useRecoilValue(selectedImageAtom);
  return (
    <div className="modal-wrapper absolute w-full h-full flex flex-column">
      <div className="close-button-wrapper">
        <div className="close-button">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
      </div>
      <div className="image-wrapper">
        <Image
          className="object-cover aspect-square"
          src={`/${selectedImagePath}`}
          fill
          sizes="100vw"
          alt="selected image"
        />
      </div>
    </div>
  );
};
