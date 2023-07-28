"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { category } from "@/constant/category";
import Container from "./Container";
import CurrentTime from "./CurrentTime";
import ViewAll from "./ViewAll";

interface CategoryProps {
  id: string;
  title: string;
  thumb: string;
}

const CategoryDetail = () => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const displayItemMovie = showAll
    ? category.filter((itme) => itme.id === "movie")
    : category.filter((item) => item.id === "movie").slice(0, 6);

  const displayItemDrama = showAll
    ? category.filter((itme) => itme.id === "drama")
    : category.filter((item) => item.id === "drama").slice(0, 6);

  const handleShowAll = () => {
    setIsLoading(true);
    // Display a loading message or spinner while loading
    setTimeout(() => {
      setShowAll(true);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Sidebar />
      <Container>
        <div>
          <ViewAll title={"Movies"} text={""} onlick={handleShowAll}></ViewAll>
        </div>
        <div
          className="pt-11 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
                     xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
        >
          {isLoading ? (
            <p className="loader"></p>
          ) : (
            displayItemMovie.map((item) => (
              <div key={item.id}>
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
                         bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                         transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
                />
                <p className="text-center pt-5">{item.title}</p>
              </div>
            ))
          )}
        </div>
        <div className="pt-10">
          <ViewAll title={"Drama"} text={""} onlick={handleShowAll}></ViewAll>
        </div>
        <div
          className="pt-11 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
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
              <p className="text-center pt-5 ">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategoryDetail;

{
  /* <div
          className="pt-[100px] grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
                     xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
        >
          {category.map((item) => {
            if (item.id === "drama") {
              return (
                <div key={item.id}>
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
                             bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                               transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
                  />
                  <p>{item.title}</p>
                </div>
              );
            }
          })}
        </div> */
}
