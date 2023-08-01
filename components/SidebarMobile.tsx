import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BsFillBoxFill, BsInboxes } from "react-icons/bs";
import Link from "next/link";

const SidebarMobile = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0  bg-[#151517]  block lg:hidden xl:hidden 2xl:hidden ">
      <div className="flex items-center justify-center text-center gap-5 text-white font-[200]   ">
        <div className="text-[15px] sm:text-[23px] flex flex-col items-center  ">
          <Link href="/">
            <div>
              <AiOutlineHome></AiOutlineHome>
            </div>
          </Link>
          <p className="text-[10px] sm:text-[23px]">Home</p>
        </div>
        <div className=" flex flex-col items-center ">
          <Link href="/">
            <div>
              <TbMovie></TbMovie>
            </div>
          </Link>
          <p className="text-[10px] sm:text-[25px]">Khmer Dub</p>
        </div>

        <div className="flex flex-col items-center ">
          <Link href="/">
            <div className="text-[15px] sm:text-[20px]">
              <BsInboxes></BsInboxes>
            </div>
          </Link>
          <p className="text-[10px] sm:text-[23px]">Category</p>
        </div>
        <div className=" flex flex-col items-center ">
          <Link href="/">
            <div>
              <BsFillBoxFill></BsFillBoxFill>
            </div>
          </Link>
          <p className="text-[10px] sm:text-[23px]">Genres</p>
        </div>
        <div className=" flex flex-col items-center ">
          <Link href="/">
            <div>
              <AiOutlineSearch></AiOutlineSearch>
            </div>
          </Link>
          <p className="text-[10px] md:text-[25px]">Search</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
