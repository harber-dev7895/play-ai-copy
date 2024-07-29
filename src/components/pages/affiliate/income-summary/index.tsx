"use client";
import React from "react";
import Image from "next/image";
import { ItemEmpty, TitlePageUser } from "@/components/common";
import OverviewMenu from "../menu";
import { TbReload } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { MdCalendarToday } from "react-icons/md";

const levelList = [1, 2, 3, 4, 5];

const IncomeSummaryPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="แนะนำเพื่อน" />

          <OverviewMenu />

          <div className="bg-box-overview rounded-[6px] py-4 px-3">
            <div className="animated animatedFadeInUp fadeInUp">
              <p className="font-light">สรุปรายได้ ทั้งหมด</p>
              <div
                className="bg-[#0000000a] py-2 px-4 flex justify-between font-light my-3"
                style={{
                  boxShadow: "inset 0 0 0 2px #53c7ff",
                }}
              >
                <div className="">
                  <p className="text-sm">รายได้จากเครือข่าย ทั้งหมด</p>
                  <p className="text-[1.75rem] font-medium">0.00</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="">
                    <span className="text-white bg-gray-900 rounded-md text-[13px] font-medium px-2">
                      0.00%
                    </span>
                  </div>
                  <p className="">จากเดือนที่แล้ว</p>
                </div>
              </div>

              <div className="bg-[#0003] rounded-[6px] p-2">
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
              </div>

              <div
                className="bg-[#0000000a] py-2 px-4 flex justify-between font-light mt-6"
                style={{
                  boxShadow: "inset 0 0 0 2px #53c7ff",
                }}
              >
                <p className="text-sm flex items-center gap-1">
                  <Image
                    src={"/images/search.png"}
                    alt={""}
                    width={18}
                    height={18}
                    className="w-[18px]"
                  />
                  <span>ค้นหาที่มารายได้</span>
                </p>
              </div>

              <div className="flex justify-between gap-2 my-1">
                <div className="w-full">
                  <select
                    id="countries"
                    className={twMerge(
                      "bg-gray-50 border border-gray-300 text-gray-900 font-light rounded-md block w-full p-2",
                      "focus:ring-blue-500 focus:border-blue-500",
                      "text-center appearance-none"
                    )}
                  >
                    <option selected>ทุกเลเวล</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                    <option value="5">Level 5</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    id="countries"
                    className={twMerge(
                      "bg-gray-50 border border-gray-300 text-gray-900 font-light rounded-md block w-full p-2",
                      "focus:ring-blue-500 focus:border-blue-500",
                      "text-center appearance-none"
                    )}
                  >
                    <option selected>ทุกประเภท</option>
                    <option value="slot">สล็อต-slot</option>
                    <option value="casino">คาสิโน-casino</option>
                    <option value="winloss">ยอดเสีย-winloss</option>
                  </select>
                </div>
              </div>

              <div className="relative text-center font-light text-xs py-4">
                <p className="text-[#00579c]">วันนี้ — วันนี้</p>
                <MdCalendarToday
                  size={16}
                  className="absolute right-0 top-2/4 -translate-y-2/4"
                />
              </div>

              <div className="flex justify-between gap-2 font-light">
                <button className="w-full rounded-[6px] p-2 bg-black text-white">
                  ล้างค่า
                </button>
                <button className="w-full rounded-[6px] p-2 bg-red-main border border-black">
                  ค้นหา
                </button>
              </div>

              <div className="my-4">
                <p className="font-light text-sm">คุณกำลังดูช่วงเวลา</p>

                {levelList.map((level) => {
                  return (
                    <div className="" key={level}>
                      <div className="flex items-center gap-2">
                        <Image
                          src={"/images/level-1.png"}
                          alt={""}
                          width={20}
                          height={20}
                        />

                        <div className="flex flex-col gap-2">
                          <p className="text-xl">ระดับที่ {level}</p>
                          <p className="font-light">รายละเอียดการทำรายได้</p>
                        </div>
                      </div>

                      <table className="table-fixed w-full my-8">
                        <thead>
                          <tr>
                            <th className="text-center font-light text-sm">
                              ประเภท
                            </th>
                            <th className="text-center font-light text-sm">
                              ยอดแทง
                            </th>
                            <th className="text-center font-light text-sm">
                              รายได้
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td colSpan={3} className="text-center py-4">
                              <ItemEmpty />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IncomeSummaryPage;
