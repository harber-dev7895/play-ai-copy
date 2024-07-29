"use client";
import React from "react";
import { CardDefault, TitlePage } from "@/components/common";
import { fishingData } from "@data/lists";

const FishingPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <TitlePage title="เกมยิงปลา คุณภาพสูง ระดับโลก" />

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 animated animatedFadeInUp fadeInUp">
        {fishingData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CardDefault img={item.img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FishingPage;
