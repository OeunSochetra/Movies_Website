import React from "react";
import Container from "./Container";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Container>
      <div className="flex justify-center pt-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-2 py-1 mx-1 border-1 rounded-sm ${
              currentPage === index + 1 ? "bg-red-600 text-white" : "text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Pagination;
