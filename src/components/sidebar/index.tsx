"use client";
import Link from "next/link";
import Image from "next/image";
import "./style.scss";

import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { sidebarMenuData } from "@data/menus";

import { Slide, toast } from "react-toastify";
import { Fragment } from "react";
import { notiSetting } from "@/utils/constants";

const Sidebar = () => {
  const pathname = usePathname();
  const notify = () =>
    toast.warn("is coming...", {
      ...notiSetting,
      transition: Slide,
    });

  return (
    <div
      className={twMerge(
        "sidebar lg:fixed relative top-0 lg:h-screen lg:max-w-[135px] max-w-[164px] w-full bg-repeat z-0 mt-2"
      )}
    >
      <div>
        <div className="navigation-drawer animated animatedFadeInUp in-left">
          <div className="menu-list">
            {sidebarMenuData.map((item: any, index: number) => {
              return (
                <Fragment key={index}>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className={twMerge(
                        "menu-item bg-side-bar hover:bg-side-bar-active",
                        pathname === item.link &&
                          item?.slug !== "e-sport" &&
                          item?.slug !== "trading"
                          ? "bg-side-bar-active"
                          : ""
                      )}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={`${item.img}`}
                          alt={item.name}
                          width={47}
                          height={47}
                          className="w-[47px]"
                        />
                      </div>
                      <span>{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      className={twMerge(
                        "menu-item bg-side-bar hover:bg-side-bar-active"
                      )}
                      onClick={notify}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={`${item.img}`}
                          alt={item.name}
                          width={47}
                          height={47}
                          className="w-[47px]"
                        />
                      </div>
                      <span>{item.name}</span>
                    </button>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
