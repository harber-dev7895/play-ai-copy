"use client";

import { usePathname } from "next/navigation";
import Sidebar from "../sidebar";
import { hiddenPaths } from "@/utils/constants";

const SidebarMobile = () => {
  const pathname = usePathname();
  const isHiddenPage = hiddenPaths.includes(pathname);

  return !isHiddenPage ? (
    <div className="lg:hidden block max-lg:w-[19.2%] max-md:w-[32%]">
      <Sidebar />
    </div>
  ) : (
    <></>
  );
};

export default SidebarMobile;
