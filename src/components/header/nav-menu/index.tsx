"use client";
import Link from "next/link";
import Image from "next/image";
import { NavMenuData } from "@data/menus";
import { twMerge } from "tailwind-merge";
import "../style.scss";
import { usePathname } from "next/navigation";

const extractBasePath = (pathname: string): string =>
  `/${pathname.split("/")[1] || ""}`;

const NavMenu = () => {
  const pathname = usePathname();

  return (
    <div className="absolute top-[-36px] left-0">
      <ul className="nav menu-wrapper mb-0 flex-wrap">
        {NavMenuData.map((item: any, index: number) => {
          return (
            <li
              key={index}
              className={twMerge(
                "nav-item",
                item.link === pathname ||
                  item.pathMain === extractBasePath(pathname)
                  ? "active"
                  : ""
              )}
            >
              <Link href={item.link} className="nav-link" target="_self">
                <div className="img-wrapper">
                  <Image
                    src={`${item.img}`}
                    width={40}
                    height={40}
                    className=""
                    alt={`Menu icon ${item.name}`}
                  />
                </div>
                <div className="text-xs font-light">{item.name}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
