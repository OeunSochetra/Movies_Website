import { thumbs } from "@/constant";

interface Thumb {
    title: string;
    imgUrl: string;
};
const Hero: React.FC = () => {
    return (
<div>
    <h1 className="text-[#fff] font-[600] text-xl text-[24px]" >Movies  🎉 </h1>
    <p className="text-[#fff] text-sm font-[400]  " >Check out the best latest Khmer Dub movies, dramas, or TV series</p>    
       
        <div className=" pt-10 grid grid-cols-2 sm:grid-cols-6 text-[#fff] gap-7">
                {thumbs.map((thumb: Thumb, index: number) => (
                    <div key={index} className="flex flex-col items-center  ">
                        <img

                                className="rounded-xl w-[180px] cursor-pointer filter 1s transition duration-300 ease-in-out hover:scale-105"
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
