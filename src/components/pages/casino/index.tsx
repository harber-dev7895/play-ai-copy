"use client";
import React from "react";
import { CardDefault, TitlePage } from "@/components/common";
import { casinoData } from "@data/lists";

const CasinoPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <TitlePage title="คาสิโนสด มาตรฐาน ระดับโลก" />

      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2 animated animatedFadeInUp fadeInUp">
        {casinoData.map((item: any, index: number) => {
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

export default CasinoPage;
