"use client";
import React from "react";
import { CardDefault, TitlePage } from "@/components/common";
import { lotteryData } from "@data/lists";

const LotteryPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <TitlePage title="หวย ความท้าทาย ระดับโลก" />

      <div className="grid lg:grid-cols-4 grid-cols-1 gap-2 animated animatedFadeInUp fadeInUp">
        {lotteryData.map((item: any, index: number) => {
          return (
            <div key={index}>
              <CardDefault img={item.img} link={item.link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LotteryPage;
