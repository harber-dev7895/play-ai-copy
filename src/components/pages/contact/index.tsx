import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { TitlePageUser } from "@/components/common";

const ContactPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto my-[30px]">
      <div className="lg:w-[58.33333333%] mx-auto animated animatedFadeInUp fadeInUp">
        <TitlePageUser title="ติดต่อ" />

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
    </div>
  );
};

export default ContactPage;
