"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import FooterSlide from "./slide";

import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "../common/fade/custom-fadeIn";

import "./style.scss";

const Footer = () => {
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <>
      <Reveal keyframes={animation} triggerOnce>
        <div className="slide-wrapper">
          <FooterSlide />
        </div>
      </Reveal>
      <div className="text-center my-4 max-lg:mb-[113px]">
        <p className="text-[21px] font-semibold py-[14px]">
          Ai123bet เว็บคาสิโนออนไลน์
        </p>
        <p className="text-sm font-light">
          Ai123bet บาคาร่า คาสิโนออนไลน์ ที่ดีที่สุด
          เพื่อประสบการณ์ที่ดีของผู้เล่นอย่างแท้จริง แบบ Ai123bet
        </p>
        <p className="text-sm font-semibold">Created website by</p>
        <div className="flex justify-center py-[14px]">
          <Image
            src={"/images/footer-logo.png"}
            alt={""}
            width={260}
            height={91}
            className="lg:w-[260px] w-[150px] footer-logo"
          />
        </div>
        <p className="text-sm font-semibold">Terms and Conditions</p>
        <p className="text-sm font-semibold my-2">
          Copyright © 2024 zixma All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
