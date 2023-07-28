"use client";
import React from "react";
import Link from "next/link";
import CustomSearch from "./CustomSearch";
import Container from "./Container";

//this import is import from the layout page and it's created in loyout page
//and this one is using for filter search in navbar ##search!!

import { useContext } from "react";
import { Mycontext } from "@/app/layout";

const Navbar = () => {
  //##search!!
  const { searchTerm, handleSearchTermChange } = useContext(Mycontext);

  return (
    <div className="relative">
      <Container>
        <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden ">
          <div className="flex gap-2 justify-end text-red-500 pt-5">
            <Link href="/login">
              <span>Login</span>
            </Link>
            <span className="">|</span>
            <Link href="/signup">
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
        <nav className=" pt-10 gap-10 flex items-center justify-center">
          <div className="w-[400px]  ">
            <CustomSearch
              value={searchTerm}
              onChange={handleSearchTermChange}
              placeholder={`Looking for Movies or TV Shows`}
            />
          </div>
          <div className="hidden sm:block md:block">
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
      </Container>
    </div>
  );
};

export default Navbar;
