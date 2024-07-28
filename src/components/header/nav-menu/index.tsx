import Image from "next/image";
import { NavMenuData } from "@data/menus";
import "../style.scss";
import { twMerge } from "tailwind-merge";

const NavMenu = () => {
  return (
    <div className="absolute top-[-36px] left-0">
      <ul className="nav menu-wrapper mb-0 flex-wrap">
        {NavMenuData.map((item: any, index: number) => {
          return (
            <li
              key={index}
              className={twMerge("nav-item", index === 0 ? "active" : "")}
            >
              <a href={item.link} className="nav-link" target="_self">
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
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
