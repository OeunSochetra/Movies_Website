import React from "react";
import ViewAll from "@/components/ViewAll";
import Link from "next/link";
import { category } from "@/constant/category";
import Container from "@/components/Container";

const categcary = () => {
  const moives = category.filter((itme) => itme.id === "movie");
  const displayItemMovie = moives.slice(0, 12);
  const drama = category.filter((itme) => itme.id === "drama");
  const displayItemDrama = drama.slice(0, 12);

  // const categcary = category;
  // const displayItme = categcary.slice(0, 6);

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
      <div>
        <Link href="/moviess">
          <ViewAll title={"Movies"} text={""}></ViewAll>
        </Link>
      </div>
      <Container>
        <div
          className="pt-5 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
                     xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
        >
          {displayItemMovie.map((item) => (
            <div key={item.id}>
              <img
                src={item.thumb}
                alt={item.title}
                className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
                             bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                               transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
              />
              <p className="pt-5 text-center">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="pt-11">
          <Link href="/moviess">
            <ViewAll title={"Movies"} text={""}></ViewAll>
          </Link>
        </div>
        <div
          className="pt-5 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
                     xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
        >
          {displayItemDrama.map((item) => (
            <div key={item.id}>
              <img
                src={item.thumb}
                alt={item.title}
                className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
                             bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                               transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
              />
              <p className="pt-5 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default categcary;
