interface CustomButtonProps {
  title: string;
  btnType: "button" | "submit";
  onClick?: () => void;
}

const CustomButton = ({ title, btnType, onClick }: CustomButtonProps) => {
  return (
    <div>
      <button
        type={btnType}
        onClick={onClick}
        className="shadow__btn transition-all duration-500 hover:scale-105 active:scale-95 
        active:rotate-1.7"
      >
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
