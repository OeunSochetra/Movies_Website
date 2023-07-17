import React from "react";

interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit";
}

const CustomButton = ({ title, btnType }: CustomButtonProps) => {
  return (
    <div>
      <button
        type={btnType}
        className="shadow__btn transition-all duration-500 hover:scale-105 active:scale-95 
        active:rotate-1.7"
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
