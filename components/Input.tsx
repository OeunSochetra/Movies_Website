interface Props {
  name: string;
  type: string;
  placeholder: string;
}
const Input = ({ name, type, placeholder }: Props) => {
  return (
    <div className="w-full">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="input__form w-full text-[#fff] bg-[#1a1b1e] py-[5px] px-[15px] font-[16px] shadow border
        border-color: rgb(239 68 68) rounded-xl 
         transition-all duration-300 focus:outline-none focus:shadow-red-800"
      />
    </div>
  );
};

export default Input;
