"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
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

export const Mycontext = createContext<any>(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const filteredThumbs = thumbs.filter((thumb: Thumb) =>
    thumb.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  const [isLoading, setIsLoading] = useState(false);
  const handlClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <html lang="en">
      <body>
        <Header></Header>
        <Mycontext.Provider
          value={{
            searchTerm,
            setSearchTerm,
            filteredThumbs,
            handleSearchTermChange,
          }}
        >
          {pathname !== "/login" &&
            pathname !== "/signup" &&
            pathname !== "/resetpass" &&
            pathname !== "/videoid" &&
            pathname !== "/subtitle" &&
            pathname !== "/categcary" &&
            pathname !== "/drama" &&
            pathname !== "/react30day" && <Navbar></Navbar>}
          <main>{children}</main>
          <Footer></Footer>

          <Sidebar></Sidebar>
          <SidebarMobile></SidebarMobile>
        </Mycontext.Provider>
      </body>
    </html>
  );
}
