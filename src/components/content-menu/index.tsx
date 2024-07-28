"use client";
import React, { useEffect } from "react";
import { contentMenuData } from "@data/menus";
import Image from "next/image";

import { keyframes, Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

const ContentMenu = () => {
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  const customFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <div className="w-full lg:max-w-[877px] max-w-[540px] m-auto mt-3 lg:overflow-hidden my-[10px]">
      <Reveal keyframes={animation} triggerOnce>
        <div className="flex lg:justify-center justify-between items-center lg:px-[50px] px-[5px] lg:gap-9 overflow-x-scroll overflow-y-hidden">
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
                />
                <p className="lg:text-[0.875em] sm:text-base text-xs">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
};

export default ContentMenu;
