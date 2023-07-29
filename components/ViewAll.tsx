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
      <div className="text-white flex items-center justify-between pt-5 pl-0 sm:pl-0 md:pl-0 lg:pl-10 xl:pl-10 2xl:pl-0">
        <div className="text-white flex flex-col">
          <h1 className="text-[18px] md:text-[30px] font-[700]">{title}</h1>
          <p className="text-[12px] md:text-[15px] font-[200]">{text}</p>
        </div>
        <div className="text-[400] text-red-500 text-[16px] md:text-[20px]">
          <button className="flex gap-2" onClick={onlick}>
            <span>View all</span>
            <div className="pt-1">
              <HiArrowCircleRight></HiArrowCircleRight>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ViewAll;
