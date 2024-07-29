"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { IoReload } from "react-icons/io5";
import Image from "next/image";

const RewardPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="แลกของรางวัล" />

          <div className="animated animatedFadeInUp fadeInUp">
            <div className="flex justify-center items-center text-sm font-light gap-8 mt-6">
              <Image
                src={"/images/diamond.png"}
                alt={""}
                width={50}
                height={45}
                className="w-[50px]"
              />
              <p className="">เพชรของคุณ 0 </p>
              <IoReload size={22} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardPage;
