"use client";
import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import TabAll from "./tab-all";
import TabDeposit from "./tab-deposit";
import TabPlay from "./tab-play";

const tabs = [
  {
    id: 1,
    name: "ทั้งหมด",
  },
  { id: 2, name: "ฝาก" },
  { id: 3, name: "เล่นเกม" },
];

const TabMission = () => {
  return (
    <div className="animated animatedFadeInUp fadeInUp mt-2">
      <TabGroup>
        <TabList className="flex justify-center">
          {tabs.map(({ id, name }) => (
            <Tab
              key={id}
              className={twMerge(
                "flex-1 py-2 md:px-4 px-1 font-light",
                "bg-side-bar",
                "data-[focus]:outline-0 data-[focus]:outline-white",
                "data-[selected]:border-secondary data-[selected]:text-secondary",
                "aria-selected:bg-g-white"
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
              {id === 1 ? <TabAll /> : id === 2 ? <TabDeposit /> : <TabPlay />}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default TabMission;
