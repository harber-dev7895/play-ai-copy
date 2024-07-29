"use client";
import React from "react";
import Image from "next/image";
import { TitlePageUser } from "@/components/common";
import { eventList } from "@data/lists";
import Link from "next/link";
import { useUserStore } from "@/stores/userStore";

const EventPage = () => {
  const { isLoggedIn } = useUserStore();

  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="กิจกรรม" />

          <div className="animated animatedFadeInUp fadeInUp mt-5">
            <div className="grid grid-cols-3 gap-4">
              {eventList.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="bg-[#53c7ffa6] rounded-[13px] m-auto p-1"
                  >
                    <Link href={isLoggedIn ? item.link : "/signin"}>
                      <Image
                        src={item.img}
                        alt={""}
                        width={240}
                        height={240}
                        className="w-full"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
