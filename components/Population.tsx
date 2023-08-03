import React from "react";
import Container from "./Container";

const Population = () => {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "United States of America", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russian Federation", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];

  function barChart(population: any) {
    const worldPopulation = tenHighestPopulation[0].population;
    const percentage = (population / worldPopulation) * 100;
    return (
      <div className="relative h-6 w-[250px] xl:w-[1100px]  bg-white rounded-sm">
        <div
          className="absolute top-0 left-0 h-6 rounded-sm bg-[#ffa500]"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  }

  return (
    <Container>
      <div className=" text-white grid grid-col  pt-8">
        <div className="pt-10 text-3xl font-[700] gap-3 flex-col flex items-center justify-center">
          <h1>World Population</h1>
          <p className="text-sm font-[300]">The most populated countries</p>
        </div>
        <div className="pt-10">
          {tenHighestPopulation.map((item, index) => (
            <div className=" " key={index}>
              <p className="flex justify-start m-3">{item.country}</p>
              <div className="flex items-center justify-center gap-5">
                {barChart(item.population)}
                {item.population}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Population;
