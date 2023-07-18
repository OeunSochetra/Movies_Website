"use client";
import { use, useState } from "react";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
const Input = ({ name, type, placeholder, value, onChange, error }: Props) => {
  return (
    <div className="w-full">
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input__form w-full text-[#fff] bg-[#1a1b1e] py-[5px] px-[15px] font-[16px] shadow border
        border-color: rgb(239 68 68) rounded-xl 
         transition-all duration-300 focus:outline-none focus:shadow-red-800"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
