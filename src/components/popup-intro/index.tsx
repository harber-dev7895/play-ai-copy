"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { useUserStore } from "@/stores/userStore";
import { twMerge } from "tailwind-merge";
import { IoCloseSharp } from "react-icons/io5";

const PopupIntro = () => {
  const cancelRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isCheck, setIsCheck] = useState(false);
  const { isLoggedIn } = useUserStore();

  useEffect(() => {
    if (isLoggedIn && !localStorage.getItem("isPopupIntro") && !isOpen)
      setIsOpen(true);
  }, [isLoggedIn]);

  const handleClose = (keyword: string) => {
    setIsOpen(false);
    if (keyword === "ok" && isCheck) localStorage.setItem("isPopupIntro", "1");
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-[999] inset-0 overflow-y-auto text-center p-4 flex justify-center items-center"
        initialFocus={cancelRef}
        onClose={setIsOpen}
      >
        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

        <Dialog.Panel
          className={twMerge(
            "relative bg-[#000000c2] text-white",
            "px-7 py-4 my-auto",
            "inline-block overflow-auto shadow-xl transform transition-all",
            "sm:max-w-lg w-full min-h-[20%]",
            "swal2-show",
            !isOpen ? "swal2-hide" : ""
          )}
        >
          <IoCloseSharp
            size={35}
            color="#ffffff"
            className="cursor-pointer font-thin mb-3 absolute top-0 right-0"
            onClick={() => setIsOpen(false)}
          />

          <div className="mx-auto">
            <Image
              className="w-full mr-2"
              src={`/images/popup.png`}
              alt=""
              width={452}
              height={452}
            />

            <div className="flex justify-center items-center text-center my-4">
              <input
                id="checkbox"
                type="checkbox"
                value=""
                checked={isCheck}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                onChange={(e) => setIsCheck(e.target.checked)}
              />
              <label
                htmlFor="checkbox"
                className="ms-2 text-sm font-light text-white cursor-pointer"
              >
                {`Don't show this item again.`}
              </label>
            </div>

            <div className="flex justify-center gap-2">
              <button
                className="py-2 px-6 bg-[#7066e0] rounded-md"
                onClick={() => handleClose("ok")}
              >
                Ok
              </button>
              <button
                className="py-2 px-6 bg-[#6e7881] rounded-md"
                onClick={() => handleClose("cancel")}
              >
                Cancel
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
};

export default PopupIntro;
