"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "@/components/common/fade/custom-fadeIn";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const ContactPage = () => {
  const router = useRouter();
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto my-[30px]">
      <Reveal keyframes={animation} triggerOnce>
        <div className="lg:w-[58.33333333%] mx-auto">
          <div className="relative w-full text-center border-b border-b-neutral-300 py-2">
            <HiOutlineArrowLeftCircle
              size={28}
              className="absolute left-0 cursor-pointer"
              onClick={() => router.back()}
            />
            <p className="text-xl font-light">ติดต่อ</p>
          </div>

          <p className="my-4 font-light">ลิงค์หลัก</p>
          <div
            className={twMerge(
              "w-full",
              "p-[10px] rounded-2xl",
              "flex justify-between items-center"
            )}
            style={{ background: "linear-gradient(180deg, #9adcff, #53c7ff)" }}
          >
            <div className="flex justify-start items-center font-light text-sm">
              <Image
                className="w-[40px] mr-2"
                src="/images/line-bg.png"
                alt="Logo"
                width={40}
                height={40}
              />

              <span>ติดต่อแอดมิน</span>
            </div>

            <Link
              className="rounded-[30px] px-3 py-1 text-white"
              style={{
                background: "linear-gradient(180deg,#ED2530,#ED2530)",
              }}
              href={"https://line.me/R/ti/p/@676zffxs?ts=05021945"}
              target="_blank"
            >
              คลิก
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default ContactPage;
