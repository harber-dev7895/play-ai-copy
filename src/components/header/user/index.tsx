import Link from "next/link";

const User = () => {
  return (
    <div className="user-wrapper">
      <div className="btn-user">
        <Link href={"/signin"} className="btn btn-login flex-grow">
          <p>เข้าสู่ระบบ</p>
        </Link>
        <Link href={"/signup"} className="btn btn-register flex-grow">
          <p>สมัครสมาชิก</p>
        </Link>
      </div>
    </div>
  );
};

export default User;
