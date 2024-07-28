"use client";
import React, { useEffect } from "react";
import { CardDefault, TitlePage } from "@/components/common";
import { casinoData } from "@data/lists";

import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "@/components/common/fade/custom-fadeIn";

const CasinoPage = () => {
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto">
      <TitlePage title="คาสิโนสด มาตรฐาน ระดับโลก" />
      <Reveal keyframes={animation} triggerOnce>
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
          {casinoData.map((item: any, index: number) => {
            return (
              <div key={index}>
                <CardDefault img={item.img} />
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default CasinoPage;
