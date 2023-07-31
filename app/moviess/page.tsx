import { category } from "@/constant/category";
import Container from "@/components/Container";
import Hero from "@/components/Hero";

const moviess = () => {
  return (
    <Container>
      <Hero
        title={"Movies"}
        text={"Relax and enjoy the full length of the entertainment"}
      ></Hero>
      <div
        className="pt-10 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6 
    xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
      >
        {category.map((item) => {
          if (item.id === "movie") {
            return (
              <div className="" key={item.id}>
                <img
                  className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
              bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center 
                transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
                  src={item.thumb}
                  alt="thumbnail"
                />
                <p className="text-white ">{item.title}</p>
              </div>
            );
          }
        })}
      </div>
    </Container>
  );
};

export default moviess;
