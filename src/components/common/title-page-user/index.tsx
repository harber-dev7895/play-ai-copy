"use client";
import { useRouter } from "next/navigation";
import { HiOutlineArrowLeftCircle } from "react-icons/hi2";

interface TitlePageProps {
  title: string;
}

const TitlePageUser = ({ title }: TitlePageProps) => {
  const router = useRouter();

  return (
    <div className="relative w-full text-center border-b border-b-neutral-300 py-2">
      <HiOutlineArrowLeftCircle
        size={28}
        className="absolute left-0 cursor-pointer"
        onClick={() => router.back()}
      />
      <p className="text-xl font-light">{title}</p>
    </div>
  );
};

export default TitlePageUser;
