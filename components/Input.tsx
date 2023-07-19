import React from "react";

interface Props {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const Input = ({ name, type, placeholder, value, onChange, error }: Props) => {
  return (
    <div className="w-full">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input__form w-full text-[#fff] bg-[#1a1b1e] text-lg py-[5px] px-[15px] font-[16px] shadow border ${
          error ? "border-red-500" : "border-color: rgb(239 68 68)"
        } rounded-xl transition-all duration-300 focus:outline-none focus:shadow-red-800`}
      />
      {error && <p className="text-red-500 pt-1 pl-2 text-sm ">{error}</p>}
    </div>
  );
};

export default Input;
