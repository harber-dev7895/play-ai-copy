"use client";
import React from "react";
import { contentMenuData } from "@data/menus";
import Image from "next/image";

const ContentMenu = () => {
  return (
    <div className="w-full lg:max-w-[877px] max-w-[540px] m-auto mt-3 lg:overflow-hidden my-[10px] animated animatedFadeInUp fadeInUp">
      <div className="flex lg:justify-center justify-between items-center lg:px-[50px] px-[5px] lg:gap-9 overflow-x-scroll overflow-y-hidden in-left">
        {contentMenuData.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="font-light flex max-lg:flex-col items-center gap-2 min-w-[70px] w-full py-1"
            >
              <Image
                src={item.img}
                alt={""}
                width={40}
                height={40}
                className="w-8"
                unoptimized
              />
              <p className="lg:text-[0.875em] sm:text-base text-xs">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentMenu;
