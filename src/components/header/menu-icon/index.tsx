"use client";
import React from "react";
import "../style.scss";
import PopupMenu from "@/components/popup-menu";

const MenuIcon = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  
  return (
    <>
      <button className="flex w-[20px]" onClick={() => setIsOpenMenu(true)}>
        <div role="button" className="menu_icon">
          <span className="one" />
          <span className="two" />
          <span className="three" />
        </div>
      </button>

      <PopupMenu isOpen={isOpenMenu} setIsOpen={setIsOpenMenu} />
    </>
  );
};

export default MenuIcon;
