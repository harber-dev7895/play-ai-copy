import Image from "next/image";
import { twMerge } from "tailwind-merge";
const levelList = [1, 2, 3, 4, 5];

const Level = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 my-6">
        {levelList.map((level) => {
          return (
            <div
              key={level}
              className="w-full bg-[#0000000a] p-2 flex justify-between"
            >
              <div>
                <p className="flex items-center gap-2 font-light">
                  <Image
                    src={"/images/level-1.png"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                  <span>LV {level}</span>
                </p>

                <p>
                  <span className="text-2xl">0</span>{" "}
                  <span className="font-light">คน</span>
                </p>

                <p className="font-light text-sm">แนะนำสมาชิกทั้งหมด</p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <p className="text-sm font-light">จากเดือนที่แล้ว</p>
                <div>
                  <span className="text-white bg-gray-900 rounded-md text-[13px] font-medium px-2">
                    0.00%
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="bg-[#0000000a] py-2 px-4 font-light"
        style={{
          boxShadow: "inset 0 0 0 2px #53c7ff",
        }}
      >
        <p className="text-sm">ยอดการเล่นทุกประเภท</p>
        <p className="font-medium">0 คน</p>
      </div>
      <table className="table-fixed w-full text-white">
        <tbody>
          {levelList.map((level, index: number) => {
            return (
              <tr
                key={level}
                className={twMerge(
                  index % 2 === 0 ? "bg-[#00000021]" : "bg-[#16161696]"
                )}
              >
                <td className="w-[50px] pl-4 pt-3">
                  <Image
                    src={"/images/level-1.png"}
                    alt={""}
                    width={20}
                    height={20}
                  />
                </td>
                <td className="pl-4 pt-3">ลำดับที่ {level}</td>
                <td className="w-[110px] pl-4 pt-3">0</td>
                <td className="w-[162px] text-center pl-4 pt-3">คน</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Level;
