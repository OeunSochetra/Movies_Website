interface CustomSearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  term: string;
  placeholder: string;
}

const CustomSearch = ({
  value,
  onChange,
  term,
  placeholder,
}: CustomSearchProps) => {
  return (
    <div>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full text-white py-2 pl-8 pr-4 border border-red-300 rounded-lg focus:outline-none 
         focus:border-red-400"
      />
    </div>
  );
};

export default CustomSearch;
