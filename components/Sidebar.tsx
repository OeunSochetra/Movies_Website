import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BsFillBoxFill, BsInboxes } from "react-icons/bs";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="absolute  ">
      <div className=" w-[80px] bg-[#1a1b1e] hidden ms:block lg:block h-[834px] fixed top-0 left-0   ">
        <div className="flex justify-center items-center">
          <div className="text-white text-[25px] pt-5">
            <Link href="/">
              <img
                className="cursor-pointer"
                src="/logo.png"
                alt="logo"
                width={35}
                height={35}
              />
            </Link>
            <div className="pt-7 cursor-pointer">
              <Link href="/" className="hover:text-red-500 ">
                <AiOutlineHome></AiOutlineHome>
              </Link>
              <div className="pt-7 hover:text-red-500">
                <TbMovie></TbMovie>
              </div>
              <Link href="/category">
                <div className="pt-7 text-[20px] hover:text-red-500">
                  <BsInboxes></BsInboxes>
                </div>
              </Link>
              <div className="pt-7 text-[20px] hover:text-red-500">
                <BsFillBoxFill></BsFillBoxFill>
              </div>
              <div className="pt-7 text-[26px] hover:text-red-500">
                <AiOutlineSearch></AiOutlineSearch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
