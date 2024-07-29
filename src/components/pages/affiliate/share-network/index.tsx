"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import OverviewMenu from "../menu";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const ShareNetworkPage = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="แนะนำเพื่อน" />

          <OverviewMenu />

          <div className="bg-box-overview rounded-[6px] py-6 px-4">
            <div className="animated animatedFadeInUp fadeInUp text-center">
              <p className="font-medium">รวยง่ายๆ กับ Ai123bet</p>
              <p className="font-medium">แค่แชร์ลิงก์ก็สร้างรายได้</p>

              <div className="embla overflow-hidden mt-2" ref={emblaRef}>
                <div className="embla__container flex">
                  <div
                    className="embla__slide min-w-0"
                    style={{ flex: "0 0 100%" }}
                  >
                    <Image
                      src={`/images/affiliate/share-network/banner-1.png`}
                      alt={""}
                      width={758}
                      height={266}
                      className="w-full rounded-2xl"
                      unoptimized
                    />
                  </div>
                  <div
                    className="embla__slide min-w-0"
                    style={{ flex: "0 0 100%" }}
                  >
                    <Image
                      src={`/images/affiliate/share-network/banner-1.png`}
                      alt={""}
                      width={758}
                      height={266}
                      className="w-full rounded-2xl"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareNetworkPage;
