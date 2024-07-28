"use client";
import React, { useEffect } from "react";
import { keyframes, Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { IoCloseCircle } from "react-icons/io5";
import Image from "next/image";

import "./style.scss";
import { language } from "@data/lists";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface PopupMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PopupMenu = ({ isOpen, setIsOpen }: PopupMenuProps) => {
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  const customFadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const customFadeOut = keyframes`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10%);
    }
  `;

  const handleShow = () => {
    setAnimation(customFadeIn);
    setIsOpen(true);
  };

  const handleHide = () => {
    setAnimation(customFadeOut);
    setTimeout(() => setIsOpen(false), 1000); // Adjust duration to match the animation duration
  };

  useEffect(() => {
    if (isOpen) handleShow();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="popup-wrapper">
          <Reveal keyframes={animation} triggerOnce className="w-full h-full">
            <div className="popup">
              <div className="popup-content">
                <div className="popup-close">
                  <IoCloseCircle
                    size={38}
                    onClick={handleHide}
                    className="cursor-pointer text-[#363636]"
                  />
                </div>

                <div className="popup-logo">
                  <Image
                    className=""
                    src="/images/logo-4x4.png"
                    alt="Logo"
                    width={160}
                    height={178}
                    priority
                  />
                </div>

                <div className="content-wrapper">
                  <Link href={"/signup"} onClick={() => setIsOpen(false)}>
                    <div className="content-item login-register">
                      <Image
                        className="w-[40px] mx-2"
                        src="/images/register.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                      <p>สมัครสมาชิก</p>
                    </div>
                  </Link>

                  <Link href={"/signin"} onClick={() => setIsOpen(false)}>
                    <div className="content-item login-register">
                      <Image
                        className="w-[40px] mx-2"
                        src="/images/login.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                      <p>เข้าสู่ระบบ</p>
                    </div>
                  </Link>

                  <Link href={"/promotion"} onClick={() => setIsOpen(false)}>
                    <div className="content-item promotion text-sm font-light">
                      <Image
                        className="w-[40px] mr-4"
                        src="/images/promotion.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                      <span>โปรโมชั่น</span>
                    </div>
                  </Link>

                  <Link href={"/contact"} onClick={() => setIsOpen(false)}>
                    <div className="content-item line text-sm font-light">
                      <Image
                        className="w-[40px] mr-4"
                        src="/images/line.png"
                        alt="Logo"
                        width={40}
                        height={40}
                      />
                      <span>ติดต่อ</span>
                    </div>
                  </Link>

                  <div className="content-item col-span-2 py-2">
                    <p className="font-medium text-sm my-2 text-white">ภาษา</p>
                    <div className="flex justify-center gap-4">
                      {language.map((item: any, index: number) => {
                        return (
                          <button key={index}>
                            <Image
                              src={item.img}
                              alt={item.code}
                              width={40}
                              height={40}
                              className={twMerge(
                                "w-[40px]",
                                index === 0 ? "active-lang" : ""
                              )}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      )}
    </>
  );
};

export default PopupMenu;
