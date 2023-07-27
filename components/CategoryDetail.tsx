"use client";
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
  return (
    <div>
      <Sidebar />
      <Container>
        <div>
          <ViewAll title={"Movie"}></ViewAll>
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

        {/* <div
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
        </div> */}
      </Container>
    </div>
  );
};

export default CategoryDetail;
