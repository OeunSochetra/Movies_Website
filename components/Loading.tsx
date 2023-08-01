"use client";
import React, { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="pt-[300px]">
      <div onClick={handleClick}>
        <img src="/logo.png" alt="logo" />
        {isLoading && <div className="loading"></div>}
      </div>
    </div>
  );
};

export default Loading;
