import Container from "@/components/Container";

function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const NumberGenaretor = () => {
  const numberArray = Array.from({ length: 32 }, (_, index) => index);
  return (
    <Container>
      <div className="text-white">
        <div className="flex items-center justify-center pt-10 text-3xl font-[700]">
          <p>Number Genaretor</p>
        </div>
        <div className="pt-10 flex itmes-center justify-center">
          <div
            className="text-xl font-[300] grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 xl:grid-cols-8
          2xl:grid-cols-8"
          >
            {numberArray.map((num) => {
              let ColorClass = "";
              if (num % 2 === 0) {
                ColorClass = "bg-green-500";
              } else if (num % 2 !== 0) {
                ColorClass = "bg-yellow-500";
              }
              if (isPrime(num)) {
                ColorClass = "bg-red-500";
              }
              return (
                <div
                  key={num}
                  className={`p-10 m-1 ${ColorClass} rounded-sm text-center `}
                >
                  {num}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NumberGenaretor;
