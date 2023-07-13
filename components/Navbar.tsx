const Navbar = () => {
  return (
    <nav className=" pt-10">
      <div className="flex items-center justify-center px-4 py-2">
        <div className="flex items-center justify-between gap-10 w-full max-w-lg">
          <input
            className="text-sm font-[200] text-[#fff] bg-[#25262b] rounded-xl px-2 py-2 mr-2 flex-grow"
            placeholder="Looking for movies or TV shows"
          />
          <a className="text-[#ec1a23] font-[600] text-sm" href="#">
            Login | Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
