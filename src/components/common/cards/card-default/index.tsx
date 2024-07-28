import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { FaCirclePlay } from "react-icons/fa6";

interface CardDefaultProps {
  img: string;
}

const CardDefault = ({ img }: CardDefaultProps) => {
  return (
    <div className="card">
      <Image
        src={img}
        alt={""}
        width={322}
        height={178}
        className="w-full rounded-[17px]"
        style={{ padding: "1.5px", boxShadow: "0 4px 4px #00000040" }}
      />

      <div className="overlay">
        <div className="overlay-inner">
          <Link href={"/"}>
            <FaCirclePlay size={20} /> <span>เข้าสู่ระบบ</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDefault;
