import { HiArrowCircleRight } from "react-icons/hi";
import Container from "./Container";

interface viewallProps {
  title: string;
  text: string;
  onlick: () => void;
}

const ViewAll = ({ title, text, onlick }: viewallProps) => {
  return (
    <Container>
      <div className="pt-10 flex justify-between pl-0 sm:pl-0 md:pl-0 lg:pl-10 xl:pl-10 2xl:pl-0  ">
        <div className=" text-white text-3xl font-semibold">
          {title}
          <p className=" text-white font-[100] text-lg">{text}</p>
        </div>
        <p className=" text-red-500 text-xl font-[400]">
          <button
            onClick={onlick}
            className="flex p-1 gap-3 text-[30px] md:text-[20px] lg:-[30px] hover:text-white"
          >
            View all
            <span className="text-xl pt-1">
              <HiArrowCircleRight></HiArrowCircleRight>
            </span>
          </button>
        </p>
      </div>
    </Container>
  );
};

export default ViewAll;
