"use client";
import React from "react";
import { useUserStore } from "@/stores/userStore";
import Link from "next/link";
import Image from "next/image";
import { IoReload } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import PopupMenuUser from "@/components/popup-menu-user";

const User = () => {
  const { isLoggedIn } = useUserStore();
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  return (
    <>
      <div className="user-wrapper">
        {!isLoggedIn ? (
          <div className="btn-user">
            <Link href={"/signin"} className="btn btn-login flex-grow">
              <p>เข้าสู่ระบบ</p>
            </Link>
            <Link href={"/signup"} className="btn btn-register flex-grow">
              <p>สมัครสมาชิก</p>
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <div className="flex gap-2 text-white font-light">
              <Link
                href={"/"}
                className="flex-grow py-2 px-6 rounded-md"
                style={{
                  background: "linear-gradient(180deg,#ED2530,#ED2530)",
                }}
              >
                <p>ฝากเงิน</p>
              </Link>
              <Link
                href={"/"}
                className="flex-grow py-2 px-6 rounded-md"
                style={{
                  background: "linear-gradient(180deg, #72ceff, #2ebdff)",
                  boxShadow: "0 2px 4px #0000001f,0 1px 2px #ece9e93d",
                  border: "1px solid transparent",
                }}
              >
                <p>ถอนเงิน</p>
              </Link>
            </div>

            <p className="ml-3 mr-4">0617894561</p>

            <div
              className="relative flex items-center rounded-[30px] bg-[#4248676e] min-w-[135px]"
              style={{ padding: ".1rem 1.5rem .2rem 1.75rem" }}
            >
              <Image
                className="w-[30px] absolute -left-2"
                src="/images/ic-coin.png"
                alt="Logo"
                width={30}
                height={30}
              />
              <div className="flex justify-between items-center w-full">
                <div className="font-light flex items-center gap-2">
                  <span>0</span>
                  <Image
                    className="w-[20px]"
                    src="/images/coin.png"
                    alt="Logo"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <IoReload />
                </div>
              </div>
            </div>

            <FaUser
              size={22}
              className="text-white cursor-pointer"
              onClick={() => setIsOpenMenu(true)}
            />
          </div>
        )}
      </div>

      <PopupMenuUser isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </>
  );
};

export default User;
