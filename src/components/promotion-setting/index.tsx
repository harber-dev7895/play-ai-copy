import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Slide, toast } from "react-toastify";
import { notiSetting } from "@/utils/constants";

const PromotionSetting = () => {
  const [enabled, setEnabled] = useState(false);

  const notify = () =>
    toast.success("เปลี่ยนสถานะเรียบร้อย", {
      ...notiSetting,
      transition: Slide,
    });

  const handleChange = () => {
    setEnabled(!enabled);
    notify();
  };

  return (
    <div
      className={twMerge(
        "w-full",
        "p-4 pr-10 rounded-2xl",
        "flex justify-between items-center"
      )}
      style={{
        background: "linear-gradient(180deg, #9adcff, #53c7ff)",
      }}
    >
      <div className="flex justify-start items-center font-light">
        <Image
          className="w-[35px] mr-2"
          src="/images/promotion.png"
          alt="Logo"
          width={35}
          height={35}
        />

        <span>รับโปรโมชั่นอัตโนมัติ</span>
      </div>

      <Switch
        checked={enabled}
        onChange={handleChange}
        className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
      >
        <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
      </Switch>
    </div>
  );
};

export default PromotionSetting;
