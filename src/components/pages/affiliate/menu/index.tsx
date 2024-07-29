import { overviewMenuData } from "@data/menus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const OverviewMenu = () => {
  const pathname = usePathname();

  return (
    <div className="w-full m-auto mt-3 lg:overflow-hidden my-[10px]">
      <div className="flex justify-between items-center lg:gap-9 overflow-x-scroll overflow-y-hidden">
        {overviewMenuData.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="font-light flex max-lg:flex-col items-center gap-2 py-1 min-w-[88px]"
            >
              <Link
                className={twMerge(
                  "font-medium rounded-[50rem] p-2 py-1",
                  item.link === pathname ? "border-b border-black" : ""
                )}
                href={item.link}
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewMenu;
