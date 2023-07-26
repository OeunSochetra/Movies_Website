import { thumbs } from "@/constant";
import Container from "./Container";
import { title } from "process";

interface RecommendProps {
  title: string;
  imgUrl: string;
}

const Recommend = () => {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
    xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
    >
      {thumbs.map((thumb) => (
        <div key={title} className="flex flex-col items-center">
          <img
            src={thumb.imgUrl}
            alt={thumb.title}
            className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
          bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
          transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
          />
          <p className="text-start font-[300]">{thumb.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
