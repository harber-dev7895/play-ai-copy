"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Bank from "./bank";
import TrueMoney from "./true-money";

const tabs = [
  {
    id: 1,
    name: "ธนาคาร",
    img: "/images/bank.png",
  },
  { id: 2, name: "ทรูมันนี่", img: "/images/true-money.png" },
];

const WithdrawPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-[30px]">
      <div className="w-full max-w-[1006px] mx-auto">
        <TitlePageUser title="ถอนเงิน" />

        <div className="flex w-full justify-center my-4 animated animatedFadeInUp fadeInUp">
          <div className="w-full">
            <TabGroup>
              <TabList className="flex justify-center">
                {tabs.map(({ id, name, img }) => (
                  <Tab
                    key={id}
                    className={twMerge(
                      "flex-1 py-[6px] md:px-4 px-1 font-light",
                      "data-[hover]:bg-side-bar-active data-[hover]:text-white data-[focus]:outline-0 data-[focus]:outline-white",
                      "data-[selected]:border-secondary data-[selected]:text-secondary data-[selected]:data-[hover]:bg-side-bar-active",
                      "aria-selected:bg-side-bar-active aria-selected:text-white",
                      "border-b rounded-t-lg"
                    )}
                  >
                    <div className="flex justify-center items-center gap-1">
                      <Image
                        className="w-[31px]"
                        src={img}
                        alt="Logo"
                        width={31}
                        height={31}
                      />
                      <span>{name}</span>
                    </div>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-3">
                {tabs.map(({ id }) => (
                  <TabPanel key={id}>
                    {id === 1 ? <Bank /> : <TrueMoney />}
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

export default WithdrawPage;
