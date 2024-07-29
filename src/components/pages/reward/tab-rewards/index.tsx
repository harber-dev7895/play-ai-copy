import { rewardList } from "@data/lists";
import Image from "next/image";
import { BsBoxSeamFill } from "react-icons/bs";

const TabRewards = () => {
  return (
    <div
      className="bg-white p-2 text-center border border-[#db925f] rounded-[10px]"
      style={{ boxShadow: "1px 2px 5px 1px #db925f" }}
    >
      <p className="text-3xl mb-1">แลกของรางวัล</p>

      <div className="flex flex-col gap-1">
        {rewardList.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="border-[4px] rounded-[4px] border-gray-400 flex justify-between gap-4 p-2"
            >
              <Image
                src={"/images/diamond-money.png"}
                alt={""}
                width={160}
                height={110}
                className="md:h-[110px] h-[64px]"
              />

              <div className="flex flex-col gap-1 text-left">
                <p className="text-base font-medium">เพชรแลกเคดิตฟรี</p>
                <p className="font-light text-sm">{item.detail}</p>
              </div>

              <div className="flex flex-col justify-center">
                <Image
                  src={"/images/diamond.png"}
                  alt={""}
                  width={20}
                  height={18}
                  className="w-[20px] mx-auto"
                />
                <p className="font-light mb-3 text-sm">{item.total}</p>
                <button className="bg-red-main md:min-w-[160px] text-center py-2 sm:px-8 px-4 rounded-[30px]">
                  <BsBoxSeamFill className="mx-auto text-white" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabRewards;
