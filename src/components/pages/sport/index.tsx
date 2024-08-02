"use client";
import React from "react";
import { CardDefault, TitlePage } from "@/components/common";
import { sportData } from "@data/lists";

const SportPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto">
      <TitlePage title="เกมกีฬา ความท้าทาย ระดับโลก" />

      <div className="grid md:grid-cols-4 grid-cols-1 gap-2 animated animatedFadeInUp fadeInUp">
        {sportData.map((item: any, index: number) => {
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

export default SportPage;
