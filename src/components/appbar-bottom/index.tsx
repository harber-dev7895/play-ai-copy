"use client";
import Image from "next/image";
import "./style.scss";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";

const AppbarBottom = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <div className="lg:hidden block fixed bottom-0 left-0 w-full z-10">
      <div className="flex items-end">
        <div className="ab-menu-wrapper app-left">
          {isLoggedIn ? (
            <>
              <Link href={"/deposit"}>
                <Image
                  src="/images/appbar-bottom/deposit.png"
                  alt=""
                  width={32}
                  height={32}
                  priority
                />
                <span>ฝากเงิน</span>
              </Link>

              <Link href={"/withdraw"}>
                <Image
                  className="w-[32px]"
                  src="/images/appbar-bottom/withdraw.png"
                  alt=""
                  width={32}
                  height={32}
                />
                <span>ถอนเงิน</span>
              </Link>
            </>
          ) : (
            <>
              <Link href={"/signin"}>
                <Image
                  className="w-[32px]"
                  src="/images/appbar-bottom/login.png"
                  alt=""
                  width={32}
                  height={32}
                />
                <span>เข้าสู่ระบบ</span>
              </Link>
              <Link href={"/signup"}>
                <Image
                  src="/images/appbar-bottom/register.png"
                  alt=""
                  width={32}
                  height={32}
                  priority
                />
                <span>สมัครสมาชิก</span>
              </Link>
            </>
          )}
        </div>

        <Link href={"/"} className="ab-logo">
          <div className="w-[80px]">
            <Image
              src="/images/logo-4x4.png"
              alt="Logo"
              width={80}
              height={89}
              priority
            />
          </div>
        </Link>

        <div className="fake-center-bg-wrapper">
          <svg viewBox="-10 -1 30 12">
            <defs>
              <linearGradient
                id="rectangleGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="40%" stopColor="#91d9ff"></stop>
                <stop offset="90%" stopColor="#55c8ff"></stop>
              </linearGradient>
            </defs>
            <path
              d="M-10 -1 H30 V12 H-10z M 5 5 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0z"
              fill="url(#rectangleGradient)"
            ></path>
          </svg>
        </div>

        <div className="ab-menu-wrapper app-right">
          <Link href={"/event"}>
            <Image
              src="/images/appbar-bottom/activity.png"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span>กิจกรรม</span>
          </Link>
          <Link href={"/"}>
            <Image
              src="/images/appbar-bottom/line.png"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span>Line</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppbarBottom;
