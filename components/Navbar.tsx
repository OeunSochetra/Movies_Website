import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-10 flex items-center justify-center px-4 py-2">
      <div className="flex flex-col items-center justify-between md:flex-row md:gap-10 w-full max-w-lg">
        <Link href="/" className="text-red-500">
          <img className="w-6" src="/logo.png" alt="logo" />
        </Link>
        <input
          className="text-sm font-[200] text-[#fff] bg-[#25262b] rounded-xl px-2 py-2 mr-2 md:flex-grow"
          placeholder="Looking for movies or TV shows"
        />
        <p className="flex flex-col md:flex-row gap-2 text-red-500">
          <Link href="/login">
            <span>Login</span>
          </Link>
          <span className="hidden md:block">|</span>
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
