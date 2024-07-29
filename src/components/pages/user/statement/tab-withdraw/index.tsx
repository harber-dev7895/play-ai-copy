import Image from "next/image";

const TabWithdraw = () => {
  return (
    <div className="bg-box-overview py-[6px] px-4 font-medium rounded-[6px] text-center mt-8 animated animatedFadeInUp fadeInUp">
      <Image
        width={82}
        height={87}
        className="w-[82px] mx-auto"
        src={"/images/item-empty.png"}
        alt={""}
      />
      <p className="text-sm my-2">ไม่พบรายการ...</p>
    </div>
  );
};

export default TabWithdraw;
