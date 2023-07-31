import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { TbMovie } from "react-icons/tb";
import { BsFillBoxFill, BsInboxes } from "react-icons/bs";
import Link from "next/link";

const SidebarMobile = () => {
  return (
    <div className="fixed left-0 right-0 bottom-0  bg-[#151517]  block lg:hidden xl:hidden 2xl:hidden ">
      <div className="flex items-center justify-center text-center gap-5 text-white font-[200]   ">
        <div className="text-[23px] flex flex-col items-center  ">
          <Link href="/">
            <div>
              <AiOutlineHome></AiOutlineHome>
            </div>
          </Link>
          <p className="text-sm">Home</p>
        </div>
        <div className="text-[25px] flex flex-col items-center ">
          <Link href="/">
            <div>
              <TbMovie></TbMovie>
            </div>
          </Link>
          <p className="text-sm">Khmer Dub</p>
        </div>

        <div className="text-[20px] flex flex-col items-center ">
          <Link href="/">
            <div>
              <BsInboxes></BsInboxes>
            </div>
          </Link>
          <p className="text-sm">Category</p>
        </div>
        <div className="text-[20px] flex flex-col items-center ">
          <Link href="/">
            <div>
              <BsFillBoxFill></BsFillBoxFill>
            </div>
          </Link>
          <p className="text-sm">Genres</p>
        </div>
        <div className="text-[25px] flex flex-col items-center ">
          <Link href="/">
            <div>
              <AiOutlineSearch></AiOutlineSearch>
            </div>
          </Link>
          <p className="text-sm">Search</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
