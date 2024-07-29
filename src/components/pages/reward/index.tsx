"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { IoReload } from "react-icons/io5";
import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import TabRewards from "./tab-rewards";
import TabHistory from "./tab-history";

const tabs = [
  {
    id: 1,
    name: "ของรางวัล",
  },
  { id: 2, name: "ประวัติแลกรางวัล" },
];

const RewardPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="แลกของรางวัล" />

          <div className="animated animatedFadeInUp fadeInUp">
            <div className="flex justify-center items-center text-sm font-light gap-8 my-6">
              <Image
                src={"/images/diamond.png"}
                alt={""}
                width={50}
                height={45}
                className="w-[50px]"
              />
              <p className="">เพชรของคุณ 0</p>
              <IoReload size={22} />
            </div>

            <TabGroup>
              <TabList className="flex justify-center border border-gray-700 rounded-tl-2xl rounded-tr-2xl">
                {tabs.map(({ id, name }) => (
                  <Tab
                    key={id}
                    className={twMerge(
                      "flex-1 py-2 md:px-4 px-1 font-light",
                      "data-[focus]:outline-0 data-[focus]:outline-white",
                      "data-[selected]:border-secondary data-[selected]:text-secondary",
                      "aria-selected:bg-red-main",
                      id === 1 ? "rounded-tl-2xl" : "rounded-tr-2xl"
                    )}
                  >
                    <div className="flex justify-center items-center gap-1">
                      <span>{name}</span>
                    </div>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-4">
                {tabs.map(({ id }) => (
                  <TabPanel key={id}>
                    {id === 1 ? <TabRewards /> : <TabHistory />}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default RewardPage;
