"use client";
import Banner from "@/components/banner";
import ContentMenu from "@/components/content-menu";
import { hiddenPaths } from "@/utils/constants";
import { usePathname } from "next/navigation";

const BannerAndContentMenu = () => {
  const pathname = usePathname();
  const isHiddenPage = hiddenPaths.includes(pathname);

  return !isHiddenPage ? (
    <>
      <Banner />
      <ContentMenu />
    </>
  ) : (
    <></>
  );
};

export default BannerAndContentMenu;
