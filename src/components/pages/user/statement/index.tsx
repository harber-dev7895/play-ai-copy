"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import { IoReloadOutline, IoWalletOutline } from "react-icons/io5";
import TabAll from "./tab-all";
import TabDeposit from "./tab-deposit";
import TabWithdraw from "./tab-withdraw";

const tabs = [
  { id: 1, name: "ทั้งหมด", icon: <IoWalletOutline /> },
  {
    id: 2,
    name: "ฝากเงิน",
    icon: <IoReloadOutline className="text-[#198754]" />,
  },
  {
    id: 3,
    name: "ถอนเงิน",
    icon: <IoReloadOutline className="text-red-600 transform scale-x-[-1]" />,
  },
];

const StatementPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-[30px]">
      <div className="lg:w-[58.33333333%] mx-auto">
        <TitlePageUser title="ประวัติการทำรายการ" />

        <div className="flex w-full justify-center mt-6 animated animatedFadeInUp fadeInUp">
          <div className="w-full">
            <TabGroup>
              <TabList className="flex justify-center">
                {tabs.map(({ id, name, icon }) => (
                  <Tab
                    key={id}
                    className={twMerge(
                      "flex-1 py-[6px] md:px-4 px-1 font-light",
                      "data-[hover]:bg-side-bar-active data-[hover]:text-white data-[focus]:outline-0 data-[focus]:outline-white",
                      "data-[selected]:border-secondary data-[selected]:text-secondary data-[selected]:data-[hover]:bg-side-bar-active",
                      "aria-selected:bg-side-bar-active aria-selected:text-white",
                      "rounded-3xl border-[2px] border-transparent"
                    )}
                  >
                    <div className="flex justify-center items-center gap-1">
                      {icon}
                      <span>{name}</span>
                    </div>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-3">
                {tabs.map(({ id }) => (
                  <TabPanel key={id}>
                    {id === 1 ? (
                      <TabAll />
                    ) : id === 2 ? (
                      <TabDeposit />
                    ) : (
                      <TabWithdraw />
                    )}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementPage;
