"use client";
import React from "react";
import { CardDefault } from "@/components/common";
import { homeData } from "@data/lists";
import PopupIntro from "@/components/popup-intro";

const HomePage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 animated animatedFadeInUp fadeInUp">
          {homeData.map((item: any, index: number) => {
            return (
              <div key={index}>
                <CardDefault img={item.img} link={item.link} />
              </div>
            );
          })}
        </div>
      </div>

      <PopupIntro />
    </>
  );
};

export default HomePage;
