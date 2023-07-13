'use client'
import Container from "./Container";
import React, { useEffect,useState } from "react";
import { fetchShows, Show } from "@/utils/api";

  
const Home: React.FC = () => {
  
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    const getShows = async () => {
      try {
        const showsData = await fetchShows();
        setShows(showsData);
      } catch (error) {
        console.error(error);
      }
    };

    getShows();
  }, []);


  return (
    <Container>
      <h1 className="text-[#fff] font-[600] text-xl text-[24px]" >Best Khmer Dub Movie/Drama  🎉 </h1>
      <p className="text-[#fff] text-sm font-[400]  " >Check out the best latest Khmer Dub movies, dramas, or TV series</p>
      <div className="pt-10">
      {shows.length > 0 ? (
        <ul>
          {shows.map((show) => (
            <li key={show._id}>
              <h2>{show.title}</h2>
              <img src={show.thumbnail} alt={show.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[#FFF]">Loading shows...</p>
      )}
    </div>
    </Container>
  )
}

export default Home;