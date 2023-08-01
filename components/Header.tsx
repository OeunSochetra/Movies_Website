"use clinet";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isLoading, setIsLoading] = useState(false);

  const hnadleHomeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  return (
    <header className=" z-10 sticky top-0 left-0 right-0 bg-[#141517] block lg:hidden xl:hidden 2xl:hidden ">
      <div className=" flex items-center justify-center text-white font-[300]  ">
        <Link href={"/"}>
          <div
            className="py-4 flex items-center gap-2"
            onClick={hnadleHomeClick}
          >
            <img src="/logo.png" alt="logo" width={30} height={30} />
            <h1>Silkroad Media</h1>
            <div className="flex items-center justify-center">
              {isLoading && <span className="loader"></span>}
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
