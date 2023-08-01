"use client";
import { useState, useEffect } from "react";

const CurrentTime = () => {
  // const [currentTime, setCurrentTime] = useState<string>("");
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const timeString = now.toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     });
  //     setCurrentTime(timeString);
  //   });
  //   return () => clearInterval(interval);
  // }, []);

  const getTimeOfDay = (): string => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Afternoon";
    return "Good Evening";
  };
  return (
    <div className="hidden lg:block">
      <h1 className="text-red-500 text-[25px] font-500 ">
        {`${getTimeOfDay()} `}
      </h1>
    </div>
  );
};

export default CurrentTime;
