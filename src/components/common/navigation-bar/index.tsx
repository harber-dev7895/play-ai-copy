"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";

const NavigationBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const gameName = searchParams.get("gameName");

  return (
    <div className="flex justify-between items-center bg-[#E6E6E6] rounded-xl my-2 p-3">
      <BsArrowLeftCircle className="cursor-pointer" onClick={router.back} />
      <div className="flex items-center gap-2">
        <IoGameControllerOutline />{" "}
        <p className="font-light text-sm">
          {`${category || "Category"} > ${gameName || "name"}`}
        </p>
      </div>
    </div>
  );
};

// export default NavigationBar;

export default function WrappedNavigationBar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigationBar />
    </Suspense>
  );
}
