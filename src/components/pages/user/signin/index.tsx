"use client";
import React, { useState } from "react";
import Image from "next/image";
import UserCardBox from "../card-box";

import "../style.scss";
import { FaUser } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { PiLockKeyFill } from "react-icons/pi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Slide, toast } from "react-toastify";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "next/navigation";
import { notiSetting } from "@/utils/constants";

const SigninPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const { login } = useUserStore();
  const router = useRouter();
  const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const notify = () =>
    toast.error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง", {
      ...notiSetting,
      transition: Slide,
    });

  const handleSubmit = () => {
    if (!user && !password) notify();
    else {
      login();
      router.replace("/");
    }
    console.log("User:", user, "Password:", password);
  };

  return (
    <div className="max-w-[1320px] mx-auto flex justify-center sm:pb-8 sm:pt-16 py-7 max-lg:mx-4">
      <div className="relative lg:w-[41.66666667%] w-full max-w-[600px]">
        <div className="flex justify-center animated animatedFadeInUp fadeInUp">
          <Image
            className="lg:h-[119px] sm:h-[91px] h-[77px] w-auto translate-y-[0.5rem]"
            src="/images/logo-text.png"
            alt="Logo"
            width={384}
            height={119}
            priority
          />
        </div>

        <div className="animated animatedFadeInUp fadeInUp">
          <UserCardBox>
            <button>
              <Image
                className="lg:w-[381px] w-full"
                src="/images/line-login.png"
                alt="Logo"
                width={381}
                height={62}
                priority
              />
            </button>
            <p className="text-white font-light mb-1">
              เข้าระบบด้วยเบอร์โทรศัพท์
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="relative text-[#00579c]">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    id="input-group-1"
                    value={user}
                    onChange={handleUserChange}
                    minLength={10}
                    maxLength={10}
                    className={twMerge(
                      "bg-[#c1e9ff] w-full font-light p-2.5 pl-12",
                      "placeholder-[#00579c]",
                      "!outline-none rounded-3xl"
                    )}
                    placeholder="เบอร์โทรศัพท์"
                    autoComplete="new-password"
                  />
                </div>

                <div className="relative text-[#00579c]">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <PiLockKeyFill />
                  </div>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="input-group-2"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={10}
                    maxLength={10}
                    className={twMerge(
                      "bg-[#c1e9ff] w-full font-light p-2.5 pl-12",
                      "placeholder-[#00579c]",
                      "!outline-none rounded-3xl"
                    )}
                    placeholder="รหัสผ่าน"
                    autoComplete="new-password"
                  />

                  <div
                    className="absolute inset-y-0 end-0 flex items-center pr-3.5 cursor-pointer text-black"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>

              <div className="flex justify-end text-white mt-1">
                <Link href={"/"}>ลืมรหัสผ่าน</Link>
              </div>

              <button className="btn-red" onClick={handleSubmit}>
                เข้าสู่ระบบ
              </button>
            </div>
          </UserCardBox>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-4 px-4 animated animatedFadeInUp fadeInUp">
          <div className="btn-login-register">
            <Link href={"/signup"} className="w-full">
              <button>
                <FaUser />
                <span>สมัครสมาชิก</span>
              </button>
            </Link>
          </div>

          <div className="btn-login-contact">
            <button>
              <BsTelephoneFill />
              <span>ติดต่อ</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
