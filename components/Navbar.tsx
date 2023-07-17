"use client";
import React from "react";
import Link from "next/link";
import CustomSearch from "./CustomSearch";
import { useContext } from "react";
import { Mycontext } from "@/app/layout";
const Navbar = () => {
  const { searchTerm, handleSearchTermChange } = useContext(Mycontext);

  return (
    <nav className="pt-10 gap-10 flex items-center justify-center">
      <div>
        <Link href="/" className="text-red-500">
          <img className="w-8" src="/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="w-[400px]">
        <CustomSearch
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder={`Looking for Movies or TV Shows`}
        />
      </div>
      <div>
        <p className="flex gap-2 text-red-500">
          <Link href="/login">
            <span>Login</span>
          </Link>
          <span className="">|</span>
          <Link href="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
