"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { privilegeList } from "@data/lists";
import Image from "next/image";

const PrivilegePage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="สิทธิพิเศษ" />

          <div className="animated animatedFadeInUp fadeInUp mt-4">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {privilegeList.map((item: any, index: number) => {
                return (
                  <div className="text-center bg-box-content rounded-[13px] p-1" key={index}>
                    <Image
                      src={item.img}
                      alt={""}
                      width={232}
                      height={287}
                      className="w-full rounded-[13px]"
                    />
                    <p className="font-light my-2">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivilegePage;
