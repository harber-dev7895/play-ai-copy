"use client";
import React, { useState } from "react";
import { TitlePageUser } from "@/components/common";
import OverviewMenu from "../menu";
import Image from "next/image";
import { Slide, toast } from "react-toastify";
import { TbReload } from "react-icons/tb";
import { RiLoader4Fill } from "react-icons/ri";
import { notiSetting } from "@/utils/constants";
import Link from "next/link";

const OverviewPage = () => {
  const [loading, setLoading] = useState(false);

  const notifyWithdraw = () =>
    toast.error("ยอดรายได้ไม่เพียงพอ กรุณาตรวจสอบ (E01)", {
      ...notiSetting,
      transition: Slide,
    });

  const notifyCopy = () =>
    toast.success("คัดลอกลิงก์สำหรับแชร์เรียบร้อย..", {
      ...notiSetting,
      transition: Slide,
    });

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      notifyCopy();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

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
          <TitlePageUser title="แนะนำเพื่อน" />

          <OverviewMenu />

          <div className="bg-box-overview rounded-[6px] py-6 px-4">
            <div className="animated animatedFadeInUp fadeInUp">
              <div
                className="bg-[#0000000a] py-2 px-4 flex justify-between font-light"
                style={{
                  boxShadow: "inset 0 0 0 2px #53c7ff",
                }}
              >
                <div>
                  <p className="text-[1.75rem] font-medium">0.00</p>
                  <p className="text-sm">รายได้จากเครือข่าย ทั้งหมด</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>
                    <span className="text-white bg-gray-900 rounded-md text-[13px] font-medium px-2">
                      0.00%
                    </span>
                  </div>
                  <p>จากเดือนที่แล้ว</p>
                </div>
              </div>

              <p className="text-[0.875em] my-4 flex items-center gap-2">
                <Image
                  src={"/images/share.png"}
                  alt={""}
                  width={22}
                  height={22}
                  className="w-[22px]"
                />
                <span>ลิงก์เชิญชวน</span>
              </p>
              <div className="py-2 flex justify-between font-light">
                <p className="text-sm">คัดลอก</p>
                <p className="text-sm flex items-center gap-1">
                  <span>
                    https://play.pg-mobile.com/signup?aff=tsyeoUlv&openExternalBrowser=1
                  </span>
                  <Image
                    src={"/images/copy.png"}
                    alt={""}
                    width={22}
                    height={22}
                    className="w-[22px] cursor-pointer"
                    onClick={() =>
                      copyToClipboard(
                        "https://play.pg-mobile.com/signup?aff=tsyeoUlv&openExternalBrowser=1"
                      )
                    }
                  />
                </p>
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
                    <p className="font-light">รายได้ที่ถอนได้</p>
                    <p className="flex items-center gap-2">
                      <span>0.00</span> <TbReload size={18} />
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
                        className="w-22px"
                      />
                      <span>ถอนรายได้</span>
                    </>
                  ) : (
                    <RiLoader4Fill size={26} className="animate-spin" />
                  )}
                </button>
              </div>

              <div className="flex justify-between gap-2 font-light text-sm">
                <div className="bg-[#0000000a] p-[0.75rem] flex justify-between items-center w-full">
                  <div>
                    <Image
                      src={"/images/total-clicks.png"}
                      alt={""}
                      width={22}
                      height={22}
                      className="w-[22px]"
                    />
                    <p className="text-3xl font-light">0</p>
                    <p>จำนวนคลิกลิงค์ทั้งหมด</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p>จากเดือนที่แล้ว</p>
                    <div>
                      <span className="text-white bg-gray-900 rounded-md text-[13px] font-medium px-2">
                        0.00%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0000000a] p-[0.75rem] flex justify-between items-center w-full">
                  <div>
                    <Image
                      src={"/images/total-members.png"}
                      alt={""}
                      width={22}
                      height={22}
                      className="w-[22px]"
                    />
                    <p className="text-3xl font-light">0</p>
                    <p>จำนวนสมาชิกทั้งหมด</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p>จากเดือนที่แล้ว</p>
                    <div>
                      <span className="text-white bg-gray-900 rounded-md text-[13px] font-medium px-2">
                        0.00%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between border-b border-gray-300 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/list.png"}
                      alt={""}
                      width={22}
                      height={22}
                      className="w-[22px]"
                    />
                    <p className="font-medium">สมาชิกใหม่วันนี้</p>
                  </div>
                  <div className="text-base font-light">
                    <p>0 คน</p>
                  </div>
                </div>

                <div className="flex justify-between border-b border-gray-300 py-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/list.png"}
                      alt={""}
                      width={22}
                      height={22}
                      className="w-[22px]"
                    />
                    <p className="font-medium">ประวัติ</p>
                  </div>

                  <Link href={"/affiliate/member"}>
                    <Image
                      src={"/images/arrow-right.png"}
                      alt={""}
                      width={10}
                      height={14}
                      className="h-[14px]"
                    />
                  </Link>
                </div>

                <div className="flex justify-between pt-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/images/list.png"}
                      alt={""}
                      width={22}
                      height={22}
                      className="w-[22px]"
                    />
                    <p className="font-medium">วิธีการสร้างเครือข่าย </p>
                  </div>
                  <div className="text-base font-light">
                    <Image
                      src={"/images/arrow-right.png"}
                      alt={""}
                      width={10}
                      height={14}
                      className="h-[14px]"
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

export default OverviewPage;
