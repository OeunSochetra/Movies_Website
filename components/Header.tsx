const Header = () => {
  return (
    <header className="z-10 sticky top-0 left-0 right-0 bg-[#141517] block lg:hidden xl:hidden 2xl:hidden ">
      <div className=" flex items-center text-white font-[300] justify-center ">
        <div className="py-4 flex items-center gap-1">
          <img src="/logo.png" alt="logo" width={30} height={30} />
          <h1>Silkroad Media</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
