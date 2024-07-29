import { notiSetting } from "@/utils/constants";
import Image from "next/image";
import { Slide, toast } from "react-toastify";

const Bank = () => {
  const notify = () =>
    toast.error("ถอนขั้นต่ำที่ 50.00 บาท กรุณาลองใหม่", {
      ...notiSetting,
      transition: Slide,
    });

  return (
    <div className="animated animatedFadeInUp fadeInUp">
      <div className="bg-box-overview py-5 px-8 rounded-[15px] mt-8">
        <div className="flex justify-start items-start gap-4">
          <Image
            src={"/images/bank/k-bank.png"}
            alt={""}
            width={50}
            height={50}
            className="w-[50px]"
          />
          <div className="gird gap-3 font-light">
            <p className="sss">ธ.กสิกรไทย จำกัด (มหาชน)</p>
            <p className="text-2xl">138-8-06280-7</p>
            <p className="sss">นาย เปรมวิทย์ อัครสินหิรัญกุล</p>
          </div>
        </div>
      </div>

      <button
        className="p-2 mt-2 bg-red-main w-full font-medium text-white rounded-[30px]"
        onClick={notify}
      >
        ยืนยันถอนเงินทั้งหมด
      </button>
    </div>
  );
};

export default Bank;
