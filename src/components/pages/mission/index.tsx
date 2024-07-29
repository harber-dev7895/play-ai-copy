"use client";
import React from "react";
import { TitlePageUser } from "@/components/common";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
import TabMission from "./tab-mission";
import TabHistory from "./tab-history";

const tabs = [
  {
    id: 1,
    name: "ภารกิจ",
  },
  { id: 2, name: "ประวัติ" },
];

const MissionPage = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto my-[30px]">
        <div className="lg:w-[58.33333333%] mx-auto">
          <TitlePageUser title="ภารกิจ" />

          <div className="animated animatedFadeInUp fadeInUp mt-4">
            <TabGroup>
              <TabList className="flex justify-center bg-red-main md:px-4 px-1">
                {tabs.map(({ id, name }) => (
                  <Tab
                    key={id}
                    className={twMerge(
                      "flex-1 py-2 font-light",
                      "data-[focus]:outline-0 data-[focus]:outline-white",
                      "data-[selected]:border-secondary data-[selected]:text-secondary",
                      "aria-selected:after:content-[''] aria-selected:after:block aria-selected:after:w-full aria-selected:after:border-b"
                    )}
                  >
                    <div className="text-left">
                      <span>{name}</span>
                    </div>
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-4">
                {tabs.map(({ id }) => (
                  <TabPanel key={id}>
                    {id === 1 ? <TabMission /> : <TabHistory />}
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

export default MissionPage;
