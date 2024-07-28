"use";
import Image from "next/image";
import { language } from "@data/lists";
import "./style.scss";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: React.ReactNode;
}

const UserCardBox = ({ children }: CardProps) => {
  return (
    <div className="card-box-wrapper">
      <div className="py-1">{children}</div>

      <div className="language">
        <p className="font-medium text-sm my-2 text-white">ภาษา</p>
        <div className="flex justify-center gap-4">
          {language.map((item: any, index: number) => {
            return (
              <button key={index}>
                <Image
                  src={item.img}
                  alt={item.code}
                  width={40}
                  height={40}
                  className={twMerge(
                    "w-[40px]",
                    index === 0 ? "active-lang" : ""
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCardBox;
