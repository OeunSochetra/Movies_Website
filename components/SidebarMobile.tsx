import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BsFillBoxFill, BsInboxes } from "react-icons/bs";
import Link from "next/link";

const SidebarMobile = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0  bg-[#151517] block lg:hidden xl:hidden 2xl:hidden ">
      <div className="flex items-center justify-center text-center gap-5 text-white font-[200]  ">
        <div className="text-[23px] flex flex-col items-center ">
          <div>
            <AiOutlineHome></AiOutlineHome>
          </div>
          <p className="text-sm">Home</p>
        </div>
        <div className="text-[25px] flex flex-col items-center ">
          <div>
            <TbMovie></TbMovie>
          </div>
          <p className="text-sm">Khmer Dub</p>
        </div>
        <div className="text-[20px] flex flex-col items-center ">
          <div>
            <BsInboxes></BsInboxes>
          </div>
          <p className="text-sm">Category</p>
        </div>
        <div className="text-[20px] flex flex-col items-center ">
          <div>
            <BsFillBoxFill></BsFillBoxFill>
          </div>
          <p className="text-sm">Genres</p>
        </div>
        <div className="text-[25px] flex flex-col items-center ">
          <div>
            <AiOutlineSearch></AiOutlineSearch>
          </div>
          <p className="text-sm">Search</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
