import Image from "next/image";

const TabHistory = () => {
  return (
    <div className="bg-box-overview py-2 px-4 font-medium rounded-[6px] text-center animated animatedFadeInUp fadeInUp">
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

export default TabHistory;
