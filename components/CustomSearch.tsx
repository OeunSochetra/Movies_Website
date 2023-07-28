import React from "react";

interface CustomSearchProps {
  value: string;
  onChange: (term: string) => void;
  placeholder: string;
}

const CustomSearch = ({ value, onChange, placeholder }: CustomSearchProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full text-black py-2 pl-8 pr-4 border border-red-300 rounded-lg focus:outline-none 
         focus:border-red-400"
      />
    </div>
  );
};

export default CustomSearch;
