"use client";
import Image from "next/image";
import "./style.scss";
import { usePathname } from "next/navigation";
import { hiddenPaths } from "@/utils/constants";

const AppbarBottom = () => {
  const pathname = usePathname();
  const isHiddenPage = hiddenPaths.includes(pathname);

  return !isHiddenPage ? (
    <div className="lg:hidden block fixed bottom-0 left-0 w-full z-10">
      <div className="flex items-end">
        <div className="ab-menu-wrapper app-left">
          <a className="w-[32px]">
            <Image
              className=""
              src="/images/appbar-bottom/login.png"
              alt=""
              width={32}
              height={32}
            />
            <span className="">เข้าสู่ระบบ</span>
          </a>
          <a className="">
            <Image
              className=""
              src="/images/appbar-bottom/register.png"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span className="">สมัครสมาชิก</span>
          </a>
        </div>

        <a className="ab-logo">
          <div className="w-[80px]">
            <Image
              className=""
              src="/images/logo-4x4.png"
              alt="Logo"
              width={80}
              height={89}
              priority
            />
          </div>
        </a>

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
          <a className="">
            <Image
              className=""
              src="/images/appbar-bottom/activity.png"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span className="">กิจกรรม</span>
          </a>
          <a className="">
            <Image
              className=""
              src="/images/appbar-bottom/line.png"
              alt=""
              width={32}
              height={32}
              priority
            />
            <span className="">Line</span>
          </a>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default AppbarBottom;
