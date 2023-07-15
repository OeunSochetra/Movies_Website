import React from "react";

interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit";
}

const CustomButton = ({ title, btnType }: CustomButtonProps) => {
  return (
    <div>
      <button type={btnType} className="shadow__btn">
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
