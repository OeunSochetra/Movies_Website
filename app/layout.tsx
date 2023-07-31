"use client";

//this import usePthame is import for hide navbar in the page /Signin and Login
//we use function that set name is hideNavbar and retun it to HTML Element
import { usePathname } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

//this import createContext is import created to allows you to pass data down the
//component tree without explicitly passing props
import { createContext, useState } from "react";
import { thumbs } from "@/constant";
import Header from "@/components/Header";
import SidebarMobile from "@/components/SidebarMobile";
import Sidebar from "@/components/Sidebar";

// export const metadata = {
//   title: "Slik Road media",
//   description: "Slik Road media",
// };

interface Thumb {
  title: string;
  imgUrl: string;
}

// this is create createContext to line 58
export const Mycontext = createContext<any>(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //We need to import create const call pathname = usePhaname() before we create function hideNavbar
  const pathname = usePathname();

  //This function for hideNavbar from login and signup page
  // function hideNavbar() {
  //   if (
  //     pathname !== "/login" &&
  //     pathname !== "/signup" &&
  //     pathname !== "/resetpass" &&
  //   ) {
  //     return <Navbar />;
  //   }
  // }

  // This the set search to display for user filter in navbaer input filter
  const [searchTerm, setSearchTerm] = useState("");
  const filteredThumbs = thumbs.filter((thumb: Thumb) =>
    thumb.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // this the set function filter for the search
  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <html lang="en">
      <body>
        {/* Mycontext.Provider is from the export const Mycontext line 28 that we has created and 
        we need too repe all the element componets below the body  */}
        <Header></Header>
        <Mycontext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            filteredThumbs,
            handleSearchTermChange,
          }}
        >
          {/* With this code we can ues for 2 ways different 1 is create function and retuen back hideNavbar */}
          {/* {hideNavbar()} */}
          {/* And this is the 2 we can in put in THML element {pathname !== "/login" && pathname !== "/signup" && <Navbar></Navbar>} */}
          {pathname !== "/login" &&
            pathname !== "/signup" &&
            pathname !== "/resetpass" &&
            pathname !== "/videoid" &&
            pathname !== "/subtitle" &&
            pathname !== "/categcary" && <Navbar></Navbar>}
          <main>{children}</main>

          <Footer></Footer>
          <Sidebar></Sidebar>
          <SidebarMobile></SidebarMobile>
        </Mycontext.Provider>
        {/* {hideNavbar()}
        

        <main>{children}</main>
        <Footer></Footer> */}
      </body>
    </html>
  );
}
