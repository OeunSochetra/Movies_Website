import { title } from "process";
import { HiArrowCircleRight } from "react-icons/hi";

interface viewallProps {
  title: string;
  text: string;
}

const ViewAll = ({ title, text }: viewallProps) => {
  return (
    <div className="pt-10 flex justify-between">
      <div className="text-red-500 font-semibold">
        {title}
        <p className=" text-white text-sm sm:text-base">{text}</p>
      </div>
      <p className=" text-red-500 text-xl font-[400]">
        <button className="flex p-1 gap-3">
          View all
          <span className="text-xl pt-1">
            <HiArrowCircleRight></HiArrowCircleRight>
          </span>
        </button>
      </p>
    </div>
  );
};

export default ViewAll;
