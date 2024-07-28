"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "@/components/common/fade/custom-fadeIn";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { Switch } from "@headlessui/react";
import { promotions } from "@data/lists";
import { CardPromotion, Modal } from "@/components/common";

const PromotionPage = () => {
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(0);
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  const handleOpenDialog = (id: number) => {
    setIsOpen(true);
    setIndexOpen(id);
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <Reveal keyframes={animation} triggerOnce>
          <div className="lg:w-[58.33333333%] mx-auto">
            <div className="relative w-full text-center border-b border-b-neutral-300 py-2">
              <HiOutlineArrowLeftCircle
                size={28}
                className="absolute left-0 cursor-pointer"
                onClick={() => router.back()}
              />
              <p className="text-xl font-light">โปรโมชั่น</p>
            </div>

            <p className="mt-4 mb-1 font-light">กรอกโค้ดโปรโมชั่น</p>
            <div className="flex flex-col gap-2">
              <div className="relative text-[#00579c]">
                <input
                  type="text"
                  id="input-group-1"
                  minLength={10}
                  maxLength={10}
                  className={twMerge(
                    "bg-[#c1e9ff] w-full font-light p-2.5",
                    "placeholder-[#00579c]",
                    "!outline-none rounded-3xl"
                  )}
                  placeholder=""
                />
              </div>
              <button
                className="w-full p-2 rounded-3xl text-white"
                style={{
                  background: "linear-gradient(180deg,#ED2530,#ED2530)",
                }}
              >
                ยืนยัน
              </button>
            </div>

            <div
              className={twMerge(
                "w-full",
                "p-4 pr-10 rounded-2xl my-8",
                "flex justify-between items-center"
              )}
              style={{
                background: "linear-gradient(180deg, #9adcff, #53c7ff)",
              }}
            >
              <div className="flex justify-start items-center font-light">
                <Image
                  className="w-[40px] mr-2"
                  src="/images/promotion.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />

                <span>รับโปรโมชั่นอัตโนมัติ</span>
              </div>

              <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>

            <p className="my-2 font-light">โปรโมชั่นทั้งหมด</p>
            <p className="my-2 text-sm font-light">
              <span className="font-bold">หมายเหตุ</span> ::
              เพียงฝากให้ยอดตรงกับเงื่อนไขโปรโมชั่นท่านจะได้รับโปรโมชั่นอัตโนมัติทันที
            </p>

            <div className="grid grid-cols-2 gap-4">
              {promotions.map((item: any, index: number) => {
                return (
                  <div key={index} onClick={() => handleOpenDialog(index)}>
                    <CardPromotion img={item.img} title={item.title} />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="mx-auto">
          <Image
            className="w-full mr-2 rounded-lg"
            src={promotions[indexOpen].img}
            alt=""
            width={452}
            height={452}
          />
          <div className="bg-[#404040] w-full rounded-lg p-2 my-3">
            ข้อตกลงและเงื่อนไข
          </div>

          <div className="text-left text-[13px]">
            <div
              dangerouslySetInnerHTML={{ __html: promotions[indexOpen].detail }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PromotionPage;
