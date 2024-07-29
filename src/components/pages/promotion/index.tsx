"use client";
import React, { useState } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { promotions } from "@data/lists";
import { CardPromotion, Modal, TitlePageUser } from "@/components/common";
import PromotionSetting from "@/components/promotion-setting";

const PromotionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [indexOpen, setIndexOpen] = useState(0);

  const handleOpenDialog = (id: number) => {
    setIsOpen(true);
    setIndexOpen(id);
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="โปรโมชั่น" />

          <div className="animated animatedFadeInUp fadeInUp">
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

            <div className="my-7">
              <PromotionSetting />
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
        </div>
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
