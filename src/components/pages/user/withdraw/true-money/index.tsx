import { notiSetting } from "@/utils/constants";
import { Slide, toast } from "react-toastify";

const TrueMoney = () => {
  const notify = () =>
    toast.error("กรุณากรอกข้อมูลให้ครบ", {
      ...notiSetting,
      transition: Slide,
    });

  return (
    <>
      <div className="py-[6px] px-4 mt-8 animated animatedFadeInUp fadeInUp">
        <p className="font-light py-4 border-b text-center">
          เพิ่มบัญชี ทรูมันนี่
        </p>

        <p className="font-light pt-4 pb-8">เลขบัญชี</p>
      </div>

      <button
        className="p-2 mt-2 bg-red-main w-full font-medium text-white rounded-[30px]"
        onClick={notify}
      >
        เพิ่มบัญชี
      </button>
    </>
  );
};

export default TrueMoney;
