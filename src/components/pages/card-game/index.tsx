"use client";
import React from "react";
import Image from "next/image";
import { TitlePageUser } from "@/components/common";
import { IoIosArrowForward } from "react-icons/io";
import { GiSpades } from "react-icons/gi";

const CardGamePage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="กิจกรรมเปิดไพ่" />

          <div className="animated animatedFadeInUp fadeInUp mt-8">
            <div className="flex items-center gap-4">
              <Image
                src={"/images/card-game.png"}
                alt={""}
                width={144}
                height={212}
                className="w-[144px]"
              />

              <div className="leading-[1.3rem] overflow-x-scroll min-w-[330px]">
                <p className="font-medium">เปิดไพ่เสี่ยงโชค ลุ้นเงิน 25,000</p>
                <p className="text-[13px]">ข้อกำหนดและเงื่อนไข</p>
                <ul className="list-none">
                  <li className="text-[13px]">- ต้องมียอดฝากขั้นต่ำ 150 บาท</li>
                  <li className="text-[13px]">
                    - เวลาเปิดไพ่ต้องมีเคดิต 150 บาท (เวลาเปิดเคดิตจะไม่หาย)
                  </li>
                  <li className="text-[13px]">- สามารถเข้าเล่นได้วันละครั้ง</li>
                  <li className="text-[13px]">- แจกวันละ 3,000 ยูสเท่านั้น!</li>
                  <li className="text-[13px]">
                    - เงินรางวัลใหญ่ มูลค่า 25,000 บาท
                  </li>
                  <li className="text-[13px]">
                    - ไม่ติดเทิร์น ถอนเงินได้ทันที
                  </li>
                </ul>
              </div>
            </div>

            <button className="bg-btn-withdrawn md:w-2/3 w-full flex items-center justify-center gap-2 rounded-[5px] py-2 mt-2">
              <GiSpades size={20} />
              <span>เข้าเล่น</span>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGamePage;
