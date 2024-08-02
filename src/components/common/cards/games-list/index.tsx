"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCirclePlay, FaRegStar } from "react-icons/fa6";
import { useUserStore } from "@/stores/userStore";
import { useRouter, useSearchParams } from "next/navigation";
import useIsTablet from "@/hooks/useIsTablet";
import { Suspense } from "react";

interface CardGameListProps {
  img: string;
  name: string;
  link: string;
  shake: boolean;
}

const CardGameList = ({ img, link, shake, name }: CardGameListProps) => {
  const { isLoggedIn } = useUserStore();
  const isTablet = useIsTablet();
  const router = useRouter();
  const searchParams = useSearchParams();
  const gameName = searchParams.get("gameName");

  const handleClick = () => {
    if (isTablet) {
      isLoggedIn ? router.push(link || "/") : router.push("/signin");
    }
  };

  return (
    <div
      className={`card ${shake ? "shake-img-random" : ""}`}
      onClick={handleClick}
    >
      <div className="relative card-games-list">
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

      <div className="p-2 flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <p className="text-sm">{name || "Name"}</p>
          <FaRegStar />
        </div>
        <p className="text-[#989998] text-xs font-light">{gameName || "-"}</p>
      </div>
    </div>
  );
};

interface WrappedCardGameListProps {
  cardProps: CardGameListProps;
}

export default function WrappedPlayerPage({
  cardProps,
}: WrappedCardGameListProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardGameList {...cardProps} />
    </Suspense>
  );
}
