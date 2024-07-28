"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import UserCardBox from "../card-box";
import { Keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import { customFadeIn } from "@/components/common/fade/custom-fadeIn";

import "../style.scss";
import { FaUser } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

const SignupPage = () => {
  const [animation, setAnimation] = React.useState<Keyframes | undefined>(
    undefined
  );

  useEffect(() => {
    setAnimation(customFadeIn);
  }, []);

  return (
    <div className="max-w-[1320px] mx-auto flex justify-center sm:py-8 py-7 max-lg:mx-4">
      <div className="relative lg:w-[41.66666667%] w-full max-w-[600px]">
        <Reveal
          keyframes={animation}
          triggerOnce
          duration={600}
          className="relative z-10"
        >
          <div className="flex justify-center">
            <Image
              className="lg:w-[224px] sm:w-[156px] w-[128px] translate-y-[1.8rem]"
              src="/images/logo-4x4.png"
              alt="Logo"
              width={224}
              height={249}
              priority
            />
          </div>
        </Reveal>

        <Reveal
          keyframes={animation}
          triggerOnce
          duration={800}
          className="relative z-0"
        >
          <UserCardBox>
            <p className="text-white font-light mb-1">
              สมัครสมาชิกด้วยเบอร์โทรศัพท์
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative text-[#00579c]">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="input-group-1"
                  minLength={10}
                  maxLength={10}
                  className={twMerge(
                    "bg-[#c1e9ff] w-full font-light p-2.5 pl-12",
                    "placeholder-[#00579c]",
                    "!outline-none rounded-3xl"
                  )}
                  placeholder="เบอร์โทรศัพท์"
                />
              </div>
              <button className="btn-red">ถัดไป</button>
            </div>
          </UserCardBox>
        </Reveal>

        <Reveal keyframes={animation} triggerOnce duration={800}>
          <div className="grid grid-cols-2 gap-6 mt-4 px-4">
            <div className="btn-login-register">
              <Link href={"/signin"} className="w-full">
                <button>
                  <FaUser />
                  <span>เข้าสู่ระบบ</span>
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
        </Reveal>
      </div>
    </div>
  );
};

export default SignupPage;
