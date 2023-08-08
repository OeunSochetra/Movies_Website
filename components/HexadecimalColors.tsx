import { HexadecinalColor } from "@/constant/HexadecinalColor";
import Container from "./Container";

const HexadecimalColors = () => {
  return (
    <Container>
      <div className="pt-20 ">
        <div className="flex items-center justify-center text-white text-3xl font-[700]">
          <h1>Hexadecimal Colors</h1>
        </div>
        <div
          className="pt-10 text-xl font-[300] grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8
    2xl:grid-cols-8"
        >
          {HexadecinalColor.map((color, index) => (
            <div key={index}>
              <div className="flex items-center justify-center m-10">
                <span
                  className="w-[200px] h-[100px] rounded-sm text-sm font-[300] "
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HexadecimalColors;
