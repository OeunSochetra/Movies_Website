"use client";
import React from "react";
import { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-white text-3xl text-center  font-700 w-full pt-11 flex items-center justify-center">
      <button
        onClick={decrementCount}
        className="p-3 m-5 text-lg font-[300] rounded-md text-center bg-red-500"
      >
        -
      </button>
      <p className="text-3xl font-[500]">{count}</p>
      <button
        onClick={incrementCount}
        className="p-3 m-5 text-lg font-[300] text-center rounded-md bg-green-500"
      >
        +
      </button>
    </div>
  );
};

export default State;
