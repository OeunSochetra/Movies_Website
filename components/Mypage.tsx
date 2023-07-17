"use client";
import React, { useState } from "react";
import { thumbs } from "@/constant";
import Container from "./Container";
import Pagination from "./Pagination";
import CustomSearch from "./CustomSearch";
import { useContext } from "react";
import { Mycontext } from "@/app/layout";

interface Thumb {
  title: string;
  imgUrl: string;
}

const Mypage: React.FC = () => {
  const { filteredThumbs } = useContext(Mycontext);
  const thumbsPerPage = 18; // Numbers of thumbs to display per page
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const filteredThumbs = thumbs.filter((thumb: Thumb) =>
  //   thumb.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const totalPages = Math.ceil(filteredThumbs.length / thumbsPerPage);
  const startIndex = (currentPage - 1) * thumbsPerPage;
  const endIndex = startIndex + thumbsPerPage;

  // const handleSearchTermChange = (term: string) => {
  //   setSearchTerm(term);
  // };

  return (
    <Container>
      <div
        className="pt-4 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
      xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
      >
        {" "}
        {filteredThumbs.length > 0 ? (
          <>
            {filteredThumbs
              .slice(startIndex, endIndex)
              .map((thumb: Thumb, index: number) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
                 bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                 transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
                    src={thumb.imgUrl}
                    alt={thumb.title}
                  />
                  <p className="text-center font-[200] pt-4">{thumb.title}</p>
                </div>
              ))}
          </>
        ) : (
          <p>NOT FOUND</p>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default Mypage;
