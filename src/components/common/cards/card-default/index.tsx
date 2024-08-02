"use client";
import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import useIsTablet from "@/hooks/useIsTablet";

interface CardDefaultProps {
  img: string;
  link: string;
}

const CardDefault = ({ img, link }: CardDefaultProps) => {
  const { isLoggedIn } = useUserStore();
  const isTablet = useIsTablet();
  const router = useRouter();

  const handleClick = () => {
    if (isTablet) {
      isLoggedIn ? router.push(link || "/") : router.push("/signin");
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      <Image
        src={img}
        alt={""}
        width={322}
        height={178}
        className="w-full rounded-[17px]"
        style={{ padding: "1.5px", boxShadow: "0 4px 4px #00000040" }}
      />

      <div className="overlay">
        <div className="overlay-inner">
          <Link href={isLoggedIn ? link || "/" : "/signin"}>
            <FaCirclePlay size={20} />
            <span>{isLoggedIn ? "เข้าเล่น" : "เข้าสู่ระบบ"}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDefault;
