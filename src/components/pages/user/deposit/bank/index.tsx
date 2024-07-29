import { notiSetting } from "@/utils/constants";
import Image from "next/image";
import { Slide, toast } from "react-toastify";

const Bank = () => {
  const notify = () =>
    toast.success("คัดลอกเลขบีญชีเรียบร้อย", {
      ...notiSetting,
      transition: Slide,
    });

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      notify();
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="text-center mt-6 grid gap-2 animated animatedFadeInUp fadeInUp">
      <p className="font-light underline">บัญชีของคุณ</p>
      <div className="bg-box-content rounded-[15px] p-4 font-light grid gap-3">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/images/bank/k-bank.png"}
            alt={""}
            width={38}
            height={38}
            className="w-[38px]"
          />
          <span>ธ.กสิกรไทย จำกัด (มหาชน)</span>
        </div>

        <p className="">
          นาย เปรมวิทย์ อัครสินหิรัญกุล <span className="mx-2">|</span>
          1388062807
        </p>
        <p className="text-menu_icon text-sm">
          {" "}
          ( กรุณาโอนเงินด้วยบัญชีที่ระบบแจ้งเท่านั้น )
        </p>
      </div>

      <p className="font-light underline">โอนเข้าบัญชี</p>
      <div className="bg-box-content rounded-[15px] p-4 font-light grid gap-3">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/images/bank/scb.png"}
            alt={""}
            width={38}
            height={38}
            className="w-[38px]"
          />
          <span>ธ.ไทยพาณิชย์ จำกัด (มหาชน)</span>
        </div>
        <p className="">พงศธร อามอ : 5074219461</p>

        <div className="flex justify-center">
          <div className="text-white bg-red-main py-[6px] px-4 font-medium rounded-[30px] flex gap-4 items-center">
            <span>เลขบัญชี :</span>
            <span id="copy-banktransfer">5074219461</span>
            <button
              className="text-[#00f] text-[13px] bg-white rounded-xl py-[1px] px-3"
              onClick={() => copyToClipboard("5074219461")}
            >
              คัดลอก
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bank;
