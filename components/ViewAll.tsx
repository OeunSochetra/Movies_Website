import { title } from "process";
import { HiArrowCircleRight } from "react-icons/hi";

interface viewallProps {
  title: string;
}

const ViewAll = ({ title }: viewallProps) => {
  return (
    <div className="pt-10 flex justify-between">
      <div className="text-white font-[600] text-2xl">{title}</div>
      <p className=" text-red-500 text-xl font-[400]">
        <button className="flex gap-3">
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
