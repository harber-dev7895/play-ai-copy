"use client";
import React, { useState } from "react";
import { ItemEmpty, TitlePageUser } from "@/components/common";
import Image from "next/image";
import { Slide, toast } from "react-toastify";
import { RiLoader4Fill } from "react-icons/ri";
import { notiSetting } from "@/utils/constants";

const bannerList = [1, 2, 3];

const RebatePage = () => {
  const [loading, setLoading] = useState(false);

  const notifyWithdraw = () =>
    toast.error("ยอดรายได้ไม่เพียงพอ กรุณาตรวจสอบ (E01)", {
      ...notiSetting,
      transition: Slide,
    });

  const handleWithdraw = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      notifyWithdraw();
    }, 1000);
  };

  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="คืนยอดเดิมพัน" />

          <div className="bg-box-overview rounded-[6px] py-6 px-4 mt-4">
            <div className="animated animatedFadeInUp fadeInUp">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {bannerList.map((item) => {
                  return (
                    <Image
                      key={item}
                      src={`/images/banner/casino.png`}
                      alt={""}
                      width={702}
                      height={250}
                      className="w-full"
                    />
                  );
                })}
              </div>

              <div
                className="bg-[#0000000a] py-2 px-4 flex justify-between font-light"
                style={{
                  boxShadow: "inset 0 0 0 2px #53c7ff",
                }}
              >
                <div className="">
                  <p className="text-[1.75rem] font-medium">0.00</p>
                  <p className="text-sm">คืนยอดเสียสะสมทั้งหมด</p>
                </div>
              </div>

              <div
                className="bg-[#0000000a] py-2 px-4 flex justify-between font-light my-6"
                style={{
                  boxShadow: "inset 0 0 0 2px #53c7ff",
                }}
              >
                <div className="">
                  <p className="text-[1.75rem] font-medium">0.00</p>
                  <p className="text-sm">คืนยอดเดิมพันสะสมทั้งหมด</p>
                </div>
              </div>

              <div className="bg-[#0003] p-2 flex justify-between rounded-[6px] mt-6 mb-4">
                <div className="flex items-center gap-1">
                  <Image
                    src={"/images/Income-withdrawn.png"}
                    alt={""}
                    width={35}
                    height={35}
                    className="w-[35px]"
                  />

                  <div className="text-sm">
                    <p className="font-light">คืนยอดเดิมพันสะสมเดือนนี้</p>
                    <p className="flex items-center gap-2">
                      <span>0</span>
                    </p>
                  </div>
                </div>

                <button
                  className="flex items-center gap-2 font-light px-2 rounded-[5px] bg-btn-withdrawn"
                  onClick={handleWithdraw}
                >
                  {!loading ? (
                    <>
                      <Image
                        src={"/images/withdraw-income.png"}
                        alt={""}
                        width={22}
                        height={22}
                        className="w-[22px]"
                      />
                      <span>ถอนเงิน</span>
                    </>
                  ) : (
                    <RiLoader4Fill size={26} className="animate-spin" />
                  )}
                </button>
              </div>

              <div className="mt-6">
                <p className="font-light">ประวัติการทำรายการ</p>
                <ItemEmpty />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RebatePage;
