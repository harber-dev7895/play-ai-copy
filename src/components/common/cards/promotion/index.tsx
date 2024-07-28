import Image from "next/image";

interface CardPromotionProps {
  title: string;
  img: string;
}

const CardPromotion = ({ title, img }: CardPromotionProps) => {
  return (
    <div className="relative bg-[#7675754d] rounded-xl p-[2px]">
      <Image
        src={img}
        alt={""}
        width={322}
        height={178}
        className="w-full rounded-[17px]"
        style={{ padding: "1.5px" }}
      />
      <div className="text-center p-2">
        <p className="text-xs font-medium">{title}</p>
      </div>
    </div>
  );
};

export default CardPromotion;
