import Marquee from "react-fast-marquee";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const TextMarquee = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className="tx-marquee flex p-2 relative -z-10 text-sm font-light"
      style={{ lineHeight: "unset", boxShadow: "0 2px 7px rgb(0 0 0 / 25%)" }}
    >
      <Image
        src="/images/megaphone.png"
        alt={""}
        width={20}
        height={20}
        className="h-5 mr-3"
      />
      <Marquee speed={isMobile ? 40 : 70}>
        <p className="min-w-[200%]">
          เว็บตรงลิขสิทธิ์แท้ สมัครวันนี้ รับฟรี 100% ทุกยอดฝาก และที่สำคัญ
          รองรับการทำรายการฝากผ่านระบบ QR code รวดเร็วไม่มีสะดุดทุกการเดิมพัน
        </p>
      </Marquee>
    </div>
  );
};

export default TextMarquee;
