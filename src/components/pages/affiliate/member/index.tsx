"use client";
import React from "react";
import { ItemEmpty, TitlePageUser } from "@/components/common";
import OverviewMenu from "../menu";
import Image from "next/image";
import Chart from "./chart";
import Level from "./level";

const MemberPage = () => {
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
                  <p className="text-sm flex items-center gap-2 mt-2">
                    <Image
                      src={"/images/active-user.png"}
                      alt={""}
                      width={20}
                      height={20}
                      className="w-[20px]"
                    />
                    <span>ยอดแอคทีฟทั้งหมด</span>
                  </p>

                  <p className="text-[36px] flex gap-2 items-end leading-none mb-4 mt-2">
                    <span>0</span>
                    <span className="text-base font-light">คน</span>
                  </p>
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

              <Chart />
              <Level />

              <div className="mt-8">
                <p className="text-sm">รายละเอียกเครือข่าย</p>

                <table className="table-fixed w-full my-8">
                  <thead>
                    <tr>
                      <th className="text-center font-light text-sm">วันที่</th>
                      <th className="text-center font-light text-sm">ยอดถอน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2} className="text-center py-4">
                        <ItemEmpty />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberPage;
