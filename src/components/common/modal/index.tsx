"use client";
import React, { useRef, Fragment, useEffect } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { SlClose } from "react-icons/sl";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const { isOpen, setIsOpen, children } = props;
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add("no-scroll");
    } else {
      document.documentElement.classList.remove("no-scroll");
    }

    return () => {
      document.documentElement.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-[999] inset-0 overflow-y-auto text-center p-4 flex justify-center items-center"
          initialFocus={cancelButtonRef}
          onClose={setIsOpen}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 -translate-y-full"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-full"
          >
            <Dialog.Panel
              className={twMerge(
                "bg-[#303030b8] text-white",
                "p-6 pt-2 my-auto",
                "inline-block overflow-auto shadow-xl transform transition-all",
                "sm:max-w-lg w-full min-h-[20%]"
              )}
            >
              <SlClose
                size={30}
                color="#000000"
                className="cursor-pointer font-thin mb-3"
                onClick={() => setIsOpen(false)}
              />
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
