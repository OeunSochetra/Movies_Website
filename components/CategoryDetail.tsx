"use client";
import Sidebar from "./Sidebar";
import { category } from "@/constant/category";
import Container from "./Container";
import { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";

interface CategoryProps {
  id: string;
  title: string;
  thumb: string;
}

const CategoryDetail = () => {
  const [showItems, setShowItems] = useState(false);

  const handleShow = () => {
    setShowItems(true);
  };

  const displayedItems = showItems
    ? category
    : category.filter((item) => item.id === "movie").slice(0, 6);

  return (
    <div>
      <Sidebar />
      <Container>
        <div className="flex items-end justify-end">
          <p className=" text-red-500 text-xl font-[400]">
            {!showItems && (
              <button onClick={handleShow} className="flex gap-3">
                View all{" "}
                <span className="text-xl pt-1">
                  <HiArrowCircleRight></HiArrowCircleRight>
                </span>
              </button>
            )}
          </p>
        </div>
        <div
          className="pt-11 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
                     xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
        >
          {category.map((item) => {
            if (item.id === "movie") {
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
        </div>

        <div
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
        </div>
      </Container>
    </div>
  );
};

export default CategoryDetail;
