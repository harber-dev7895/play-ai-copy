import React from "react";
import { TitlePageUser } from "@/components/common";
import Image from "next/image";

const lists = [
  { img: "bronze", name: "Bronze", min: 0, max: 100 },
  { img: "silver", name: "Silver", min: 100, max: 1000 },
  { img: "gold", name: "Gold", min: 1000, max: 10000 },
  { img: "platinum", name: "Platinum", min: 10000, max: 100000 },
  { img: "diamond", name: "Diamond", min: 100000, max: 1000000 },
];

const ProfilePage = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-[30px]">
      <div className="lg:w-[58.33333333%] mx-auto">
        <TitlePageUser title="ข้อมูลบัญชี" />

        <div className="my-4 animated animatedFadeInUp fadeInUp">
          <div className="bg-box-content p-4 flex items-center w-full">
            <Image
              className="w-[60px]"
              src={`/images/user-profile.png`}
              alt=""
              width={60}
              height={60}
            />
            <div className="">
              <p className="font-medium">
                0617894561 <span className="text-sm">( fap1a2m180468 )</span>
              </p>
              <span className="bg-white rounded-md px-1 text-xs font-medium">
                ไม่ระบุ
              </span>
            </div>
          </div>

          <div className="text-center font-light my-1">
            <p className="text-[#ceb46f] underline">เปลี่ยนรหัสผ่าน</p>
            <p className="text-sm text-[#ddd]">
              พบปัญหา
              <span className="text-[#ceb46f] underline">
                ติดต่อฝ่ายบริการลูกค้า
              </span>
            </p>
          </div>

          <div className="bg-box-overview rounded-[6px] p-4 font-light grid gap-3 text-center">
            <div className="flex justify-center items-center gap-2">
              <Image
                src={"/images/bank/k-bank.png"}
                alt={""}
                width={38}
                height={38}
                className="w-[38px]"
              />
              <span>ธ.กสิกรไทย จำกัด (มหาชน)</span>
            </div>

            <p className="">
              นาย เปรมวิทย์ อัครสินหิรัญกุล <span className="mx-2">|</span>
              1388062807
            </p>
          </div>

          <div className="bg-box-overview rounded-[6px] p-2 font-light mt-4 mb-2">
            <div className="mb-1 text-sm font-light">0 %</div>
            <div className="w-full bg-[#e9ecef] rounded-full h-1.5 mb-4">
              <div
                className="bg-blue-600 h-1.5 rounded-full"
                style={{ width: "0%" }}
              />
            </div>

            <div className="flex justify-between border-b border-gray-300">
              <div className="">
                <p className="font-light text-sm">ยอดฝากปัจจุบัน</p>
                <p className="font-medium">0.00 บาท</p>
              </div>
              <div className="text-right">
                <p className="font-light text-sm">คุณต้องทำยอดฝาก</p>
                <p className="font-medium">100.00 บาท</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-x-auto">
            <table className="table-auto w-full bg-box-content min-w-[428px]">
              <thead>
                <tr>
                  <th className="text-[#00579c] text-center font-light text-sm bg-box-overview py-2 w-[50px]"></th>
                  <th className="text-[#00579c] text-center font-light text-sm bg-box-overview py-2">
                    ลำดับ Level
                  </th>
                  <th className="text-[#00579c] text-center font-light text-sm bg-box-overview py-2">
                    ยอดฝากสะสมขั้นต่ำ
                  </th>
                  <th className="text-[#00579c] text-center font-light text-sm bg-box-overview py-2">
                    คืนยอดเสียสูงสุด
                  </th>
                </tr>
              </thead>
              <tbody>
                {lists.map((item: any, index: number) => {
                  return (
                    <tr key={index} className="font-light">
                      <td className="text-center py-1 w-[50px]">
                        <Image
                          className="w-[34px] mx-auto"
                          src={`/images/level/${item.img}.png`}
                          alt=""
                          width={34}
                          height={34}
                        />
                      </td>
                      <td className="py-1 text-sm">{item.name}</td>
                      <td className="text-center py-1">
                        {Number(item.min).toLocaleString()}
                      </td>
                      <td className="text-center py-1">
                        {Number(item.max).toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
