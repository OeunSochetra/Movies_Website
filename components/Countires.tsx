"use client";
import { useState } from "react";
import { countries } from "@/constant/countriesData";
import Container from "./Container";

interface Country {
  flag: string;
  name: string;
  population: number;
  language: string;
}

const Countries = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleChange = () => {
    const randomIndex = Math.floor(Math.random() * countries.length);

    const randomCountry: any = countries[randomIndex];

    setSelectedCountry(randomCountry);
  };

  return (
    <Container>
      <div className="flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[#a9c3c5ff]">
          {selectedCountry ? (
            <div>
              <div className="fixed flex items-center justify-center w-full pt-10">
                <div>
                  <img src={selectedCountry.flag} width={250} height={250} />
                  <h1 className="text-center pt-2 text-3xl font-[600]">
                    {selectedCountry.name}
                  </h1>
                  <div className="pt-5 text-start text-xl font-[150]">
                    <p>Population: {selectedCountry.population}</p>
                    <p>Language: {selectedCountry.language}</p>
                    <p>Country: {selectedCountry.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="flex items-center justify-center pt-8">
            <button className="shadow__btn" onClick={handleChange}>
              Change Country
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Countries;
