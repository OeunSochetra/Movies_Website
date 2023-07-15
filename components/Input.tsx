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
        className="input__form w-full text-[#fff] bg-red-300 py-[5px] px-[15px] font-[16px] shadow border border-red-500 border-none rounded-xl 
         transition-all duration-300 focus:outline-none focus:shadow"
      />
    </div>
  );
};

export default Input;
