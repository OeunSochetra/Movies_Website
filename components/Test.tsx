// "use client";
// import { useState } from "react";

// const Test = () => {
//   const [active, setActive] = useState(0);

//   return (
//     <div
//       className={"group relative cursor-pointer rounded-lg bg-transparent"}
//       onClick={() => setActive(0)}
//     >
//       <img
//         className={
//           "relative top-0 z-20 transition duration-500 ease-in-out group-hover:scale-125"
//         }
//         src={"/facebook.png"}
//         width={30}
//         height={30}
//         alt={"Silk Road Media Logo"}
//       />
//       <img
//         className={
//           "absolute top-0 z-10 transition duration-500 ease-in-out group-hover:scale-150 group-hover:blur-sm"
//         }
//         src={"/facebook.png"}
//         width={30}
//         height={30}
//         alt={"Silk Road Media Logo"}
//       />
//     </div>
//   );
// };

// export default Test;

// this code from the components that hide the thumbnai and click to show all the thumbnail
"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { category } from "@/constant/category";
import Container from "./Container";
import CurrentTime from "./CurrentTime";
import ViewAll from "./ViewAll";

// interface CategoryProps {
//   id: string;
//   title: string;
//   thumb: string;
// }

// const CategoryDetail = () => {
//   const [showAll, setShowAll] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const displayItemMovie = showAll
//     ? category.filter((itme) => itme.id === "movie")
//     : category.filter((item) => item.id === "movie").slice(0, 6);

//   const displayItemDrama = showAll
//     ? category.filter((itme) => itme.id === "drama")
//     : category.filter((item) => item.id === "drama").slice(0, 6);

//   const handleShowAll = () => {
//     setIsLoading(true);
//     // Display a loading message or spinner while loading
//     setTimeout(() => {
//       setShowAll(true);
//       setIsLoading(false);
//     }, 2000);
//   };

//   return (
//     <div>
//       <Sidebar />
//       <Container>
//         <div>
//           <ViewAll title={"Movies"} text={""} onlick={handleShowAll}></ViewAll>
//         </div>
//         <div
//           className="pt-11 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6
//                      xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
//         >
//           {isLoading ? (
//             <p className="loader"></p>
//           ) : (
//             displayItemMovie.map((item) => (
//               <div key={item.id}>
//                 <img
//                   src={item.thumb}
//                   alt={item.title}
//                   className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
//                          bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center
//                          transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
//                 />
//                 <p className="text-center pt-5">{item.title}</p>
//               </div>
//             ))
//           )}
//         </div>
//         <div className="pt-10">
//           <ViewAll title={"Drama"} text={""} onlick={handleShowAll}></ViewAll>
//         </div>
//         <div
//           className="pt-11 grid grid-cols-2 md:grid-cols-4 sm:grid-cols-4 xl:grid-cols-6
//                      xxl:grid-cols-6 text-[#fff] gap-4 md:gap-4 sm:gap-2 xl:gap-3"
//         >
//           {displayItemDrama.map((item) => (
//             <div key={item.id}>
//               <img
//                 src={item.thumb}
//                 alt={item.title}
//                 className="rounded-xl xl:w-[180px] ms:w-[170px] md:w-[170px] cursor-pointer
//               bg-gray-300 bg-opacity-60 shadow-xl backdrop-blur-md text-center
//               transition-all duration-500 hover:scale-105 active:scale-95 active:rotate-1.7"
//               />
//               <p className="text-center pt-5 ">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default CategoryDetail;

// import { HiArrowCircleRight } from "react-icons/hi";
// import Container from "./Container";

// interface viewallProps {
//   title: string;
//   text: string;
//   onlick: () => void;
// }

// const ViewAll = ({ title, text, onlick }: viewallProps) => {
//   return (
//     <Container>
//       <div className="text-white flex items-center justify-between pt-5 pl-0 sm:pl-0 md:pl-0 lg:pl-10 xl:pl-10 2xl:pl-0">
//         <div className="text-white flex flex-col">
//           <h1 className="text-[18px] md:text-[30px] font-[700]">{title}</h1>
//           <p className="text-[12px] md:text-[15px] font-[200]">{text}</p>
//         </div>
//         <div className="text-[400] text-red-500 text-[16px] md:text-[20px]">
//           <button className="flex gap-2" onClick={onlick}>
//             <span>View all</span>
//             <div className="pt-1">
//               <HiArrowCircleRight></HiArrowCircleRight>
//             </div>
//           </button>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ViewAll;
