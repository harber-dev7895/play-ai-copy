import Image from "next/image";

const CardMission = () => {
  return (
    <div className="relative bg-[#7675754d] rounded-xl py-6 px-3">
      <div className="cover-ribbon text-[10px] h-[82px] w-[77px] absolute right-[1px] top-0 overflow-hidden">
        <div className="bg-[#FFC107] text-white absolute -right-[40px] top-[8px] min-w-[127px] text-center rotate-45 p-[10px]">
          อีก 154 วัน
        </div>
      </div>

      {/* top: 8px;
  right: -40px; */}

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <div className="left">
            <p className="">ฝากครบ 100 บาท รับเพชร 10 เม็ด</p>
            <p className="font-light line-clamp-1">
              สะสมยอดฝากครบ 100 บาท ต่อวัน รับเพชร 10 เม็ด นำเพชรที่ได้รับ
              สะสมไปแลกที่เมนู “รางวัล”
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-2 mb-3">
              <div
                className="bg-[#e9ecef] h-1 rounded-full"
                style={{ width: "100%" }}
              />
            </div>
            <p className="font-light text-sm">
              0/100.00{" "}
              <span className="bg-[#198754] px-1 rounded-[50rem] text-xs font-medium text-white">
                ดูรายละเอียด
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <Image
            src={`/images/diamond-plus.png`}
            alt={""}
            width={64}
            height={44}
            className="w-[64px]"
          />
          <p className="text-xs">จำกัด 100000 สิทธิ์</p>
        </div>
      </div>
    </div>
  );
};

export default CardMission;
