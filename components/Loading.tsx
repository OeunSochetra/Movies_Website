"use client";
import React, { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  };

  return (
    <div className="bg-white text-white">
      <div onClick={handleClick}>
        {isLoading && <div className="loading"></div>}
      </div>
    </div>
  );
};

export default Loading;
