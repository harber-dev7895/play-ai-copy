"use client";
import React, { useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import "./style.scss";
import { Fade } from "react-awesome-reveal";
import TextMarquee from "../TextMarquee";
import { twMerge } from "tailwind-merge";
import { size } from "lodash";

import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "../common/fade/custom-fadeIn";

const slides = [
  "/images/banner/casino.png",
  "/images/banner/cash-back.png",
  "/images/banner/Invite-friends.png",
  "/images/banner/casino.png",
];

const Banner = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <>
      <Fade direction="up">
        <TextMarquee />
      </Fade>

      <Reveal keyframes={animation} triggerOnce>
        <section className="embla-banner">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((item, index) => (
                <div
                  className={twMerge(
                    "embla__slide",
                    Number(index) + 1 === size(slides) ? "mr-2" : ""
                  )}
                  key={index}
                >
                  <Image
                    src={item}
                    alt={""}
                    width={702}
                    height={250}
                    className="w-full"
                  />
                </div>
              ))}
            </div>

            <div className="embla__controls">
              <div className="embla__buttons">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
};

export default Banner;
