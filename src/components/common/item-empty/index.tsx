import Image from "next/image";

const ItemEmpty = () => {
  return (
    <div className="w-full text-center py-2">
      <Image
        width={82}
        height={87}
        className="w-[82px] mx-auto"
        src={"/images/item-empty.png"}
        alt={""}
      />
      <p className="text-sm my-2 font-medium">ไม่พบรายการ...</p>
    </div>
  );
};

export default ItemEmpty;
