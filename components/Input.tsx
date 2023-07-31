"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({ name, type, placeholder, value, onChange, error }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full md:w-full">
      <div className="relative">
        <input
          name={name}
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input__form w-[300px] md:w-[400px]  text-[#fff] bg-[#1a1b1e] py-[5px] px-[10px] lg:py-[5px] lg:px-[15px]  font-[16px] shadow border ${
            error ? "border-red-500" : "border-color: rgb(239 68 68)"
          } rounded-xl transition-all duration-300 focus:outline-none focus:shadow-red-800`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={handleTogglePassword}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-400 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 pt-1 pl-2 text-sm ">{error}</p>}
    </div>
  );
};

export default Input;
