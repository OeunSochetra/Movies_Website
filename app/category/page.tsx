"use client";
import { useState } from "react";
import CategoryDetail from "@/components/CategoryDetail";
import Container from "@/components/Container";
import ViewAll from "@/components/ViewAll";

const category = () => {
  return (
    <div>
      <div className="relative">
        <img
          src="/cover.jpg"
          alt="cover"
          className="w-[550px] h-[150px] sm:w-auto sm:h-auto sm:max-w-full sm:max-h-full opacity-20"
        />

        <div
          className="absolute top-[70%] font-[500] left-[7%] transform -translate-y-1/2 
        "
        >
          <h1 className="text-xl sm:text-5xl text-red-500">Silk Road Media</h1>
          <h1 className="text-white pt-1 text-xl sm:text-[30px]">Category</h1>
          <p className="text-white pt-1 text-[10px] sm:text-[20px]">
            We have a large collection of Movies and TV shows for you to watch.
          </p>
        </div>
      </div>

      <CategoryDetail></CategoryDetail>
    </div>
  );
};

export default category;
