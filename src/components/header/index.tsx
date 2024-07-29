import Image from "next/image";
import MenuIcon from "./menu-icon";
import NavMenu from "./nav-menu";
import User from "./user";
import "./style.scss";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="header">
      <div className="header-brand flex">
        <MenuIcon />
        <div className="ml-[16px]">
          <Link href={"/"}>
            <Image
              className="xs:h-[51px] h-[28px]"
              src="/images/logo.png"
              alt="Logo"
              width={128}
              height={62}
              priority
              style={{ width: "auto" }}
            />
          </Link>
        </div>
      </div>
      <div className="header-content">
        <div className="xl:block hidden relative min-w-[338px]">
          <NavMenu />
        </div>
        <User />
      </div>
    </nav>
  );
};

export default Header;
