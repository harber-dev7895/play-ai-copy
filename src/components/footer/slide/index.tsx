"use client";
import { footerSlide } from "@data/menus";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { size } from "lodash";
import "./style.scss";

const FooterSlide = () => {
  const options: EmblaOptionsType = { loop: true };
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 1000 }),
  ]);

  return (
    <section className="embla-footer">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {footerSlide.map((item: string, index: number) => (
            <div
              className={twMerge(
                "embla__slide",
                Number(index) + 1 === size(footerSlide) ? "mr-2" : ""
              )}
              key={index}
            >
              <Image
                src={item}
                alt={""}
                width={702}
                height={250}
                className="w-full"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterSlide;
