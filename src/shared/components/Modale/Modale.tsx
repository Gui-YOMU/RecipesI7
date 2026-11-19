import { RxCross2 } from "react-icons/rx";
import type { ModalProps } from "../../types/sharedTypes.ts";

export const Modal = ({ children, onClose, open, title }: ModalProps) => {
  return (
    <dialog
      className={`h-fit w-4/5 sm:w-1/2 lg:w-1/3 2xl:w-1/4 border-5 rounded-xl border-gray-400 px-1 py-2 ${open ? "flex" : "hidden"} flex-col gap-3 fixed top-1/2 left-1/2 -translate-1/2`}
    >
      <div className="flex justify-between items-center">
        <h2 className="m-auto text-center text-2xl font-bold">{title}</h2>
        <button
          className="w-6 h-6 rounded-full bg-red-400 flex justify-center items-center"
          onClick={onClose}
        >
          <RxCross2 size={20} color="white" />
        </button>
      </div>
      <div className="flex flex-col gap-3">{children}</div>
    </dialog>
  );
};
