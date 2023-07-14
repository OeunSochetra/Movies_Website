import { thumbs } from "@/constant";
import Container from "./Container";
Container

interface Thumb {
    title: string;
    imgUrl: string;
};
const Hero: React.FC = () => {
    return (
<div>
 <Container>
  <h1 className="text-white font-semibold ">Movies 🎉</h1>
  <p className="text-white text-sm sm:text-base ">Check out the best latest Khmer Dub movies, dramas, or TV series</p>    
  </Container>

        <div className=" pt-10 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3 ">
                {thumbs.map((thumb: Thumb, index: number) => (
                    <div key={index} className="flex flex-col items-center  ">
                        <img

                                className=" rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
                                src={thumb.imgUrl}
                                alt={thumb.title}
                        />

            <p className="text-center font-[200]  pt-4">{thumb.title}</p>
        </div>
      ))}
    </div>
    </div>
    );
};

export default Hero;
